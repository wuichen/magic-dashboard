import { createSlice } from '@reduxjs/toolkit';
import { omit } from 'lodash';
import faker from 'faker';
import { addDays } from 'date-fns';
// utils
import axios from '../../utils/axios';
import { CardComment, KanbanCard, KanbanBoard, KanbanColumn } from '@types/kanban';
import { dispatch } from '../store';
import { mockImgAvatar, mockImgFeed } from 'utils/mockImages';
// ----------------------------------------------------------------------
import { request, gql } from 'graphql-request';
import {
  CreateOneStoryDocument,
  CreateOneItemDocument,
  UpdateOneStoryDocument,
  DeleteOneStoryDocument,
  FindManyRequestDocument,
  UpdateOneCollectionDocument,
  DeleteOneItemDocument,
  FindUniqueStoryDocument,
  FindUniqueCollectionDocument,
} from 'generated';

// ----------------------------------------------------------------------

function objFromArray<Type extends Record<string, any>>(array: Type[], key = 'id') {
  return array.reduce<Record<string, Type>>((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

type InitialState = {
  isLoading: boolean;
  error: boolean;
  board: {
    cards: Record<string, KanbanCard>;
    columns: Record<string, KanbanColumn>;
    columnOrder: string[];
  };
};

const initialState: InitialState = {
  isLoading: false,
  error: false,
  board: {
    cards: {},
    columns: {},
    columnOrder: [],
  },
};

const slice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET BOARD
    getBoardSuccess(state, action) {
      state.isLoading = false;
      const board = action.payload;
      const cards = objFromArray<KanbanCard>(board.cards);
      const columns = objFromArray<KanbanColumn>(board.columns);
      const { columnOrder } = board;
      state.board = {
        cards,
        columns,
        columnOrder,
      };
    },

    // CREATE NEW COLUMN
    createColumnSuccess(state, action) {
      const newColumn = action.payload;
      state.isLoading = false;
      state.board.columns = {
        ...state.board.columns,
        [newColumn.id]: newColumn,
      };
      state.board.columnOrder.push(newColumn.id);
    },

    persistCard(state, action) {
      const columns = action.payload;
      state.board.columns = columns;
    },

    persistColumn(state, action) {
      state.board.columnOrder = action.payload;
    },

    addTask(state, action) {
      const { card, columnId } = action.payload;

      state.board.cards[card.id] = card;
      state.board.columns[columnId].cardIds.push(card.id);
    },

    deleteTask(state, action) {
      const { cardId, columnId } = action.payload;

      state.board.columns[columnId].cardIds = state.board.columns[columnId].cardIds.filter((id) => id !== cardId);
      state.board.cards = omit(state.board.cards, [cardId]);
    },

    // UPDATE COLUMN
    updateColumnSuccess(state, action) {
      const column = action.payload;

      state.isLoading = false;
      state.board.columns[column.id] = column;
    },

    // DELETE COLUMN
    deleteColumnSuccess(state, action) {
      const { columnId } = action.payload;
      const deletedColumn = state.board.columns[columnId];

      state.isLoading = false;
      state.board.columns = omit(state.board.columns, [columnId]);
      state.board.cards = omit(state.board.cards, [...deletedColumn.cardIds]);
      state.board.columnOrder = state.board.columnOrder.filter((c) => c !== columnId);
    },
  },
});

// Reducer
export default slice.reducer;

export const { actions } = slice;

// ----------------------------------------------------------------------

export function getBoard() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // const response = await axios.get('/api/kanban/board');
      // dispatch(slice.actions.getBoardSuccess(response.data.board));
      const FindUniqueCollectionWithStoriesAndItems = gql`
        query findUniqueCollection($where: CollectionWhereUniqueInput!) {
          findUniqueCollection(where: $where) {
            id
            name
            description
            doImage
            storyOrder
            stories {
              id
              name
              description
              doImage
              itemIds
              requests {
                id
                name
                comments {
                  user {
                    id
                    name
                    doImage
                  }
                  message
                  messageType
                }
              }
              items {
                id
                name
                description
                doImage
              }
            }
          }
        }
      `;

      const data = await request('/api/graphql', FindUniqueCollectionWithStoriesAndItems, {
        where: {
          id: '1',
        },
      });
      const collection = data.findUniqueCollection;

      const board: KanbanBoard = {
        cards: collection.stories
          .reduce((previous, current) => {
            return [...previous, ...current.items];
          }, [])
          .map((item) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              assignee: [],
              due: [],
              attachments: [],
              comments: [],
              completed: true,
              ...item,
            };
          }),
        columns: collection.stories.map((story) => {
          return {
            ...story,
            cardIds: story.itemIds ? story.itemIds : [],
          };
        }),
        columnOrder: collection.storyOrder ? collection.storyOrder : [],
      };
      dispatch(slice.actions.getBoardSuccess(board));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function createColumn(newColumn: { name: string }) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // const column = {
      //   id: faker.datatype.uuid(),
      //   name,
      //   cardIds: [],
      // };
      // board.columns.push(column);
      // board.columnOrder.push(column.id);

      const newStory = await request('/api/graphql', CreateOneStoryDocument, {
        data: {
          name: newColumn.name,
          collection: {
            connect: {
              id: '1',
            },
          },
        },
      });

      const collection = await request('/api/graphql', FindUniqueCollectionDocument, {
        where: {
          id: '1',
        },
      });

      const updateCollection = await request('/api/graphql', UpdateOneCollectionDocument, {
        where: {
          id: '1',
        },
        data: {
          storyOrder: [...collection.findUniqueCollection.storyOrder, newStory?.createOneStory?.id],
        },
      });

      const column = {
        ...newStory.createOneStory,
        cardIds: [],
      };
      dispatch(slice.actions.createColumnSuccess(column));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function updateColumn(columnId: string, updateColumn: KanbanColumn) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // const columnIndex = board.columns.findIndex((column) => column.id === columnId);

      // board.columns[columnIndex] = {
      //   ...board.columns[columnIndex],
      //   ...updateColumn,
      // };

      const updateStoryData = await request('/api/graphql', UpdateOneStoryDocument, {
        where: {
          id: columnId,
        },
        data: {
          name: { set: updateColumn.name },
        },
      });
      const column = {
        cardIds: updateStoryData.updateOneStory.itemIds,
        ...updateStoryData.updateOneStory,
      };

      dispatch(slice.actions.updateColumnSuccess(column));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function deleteColumn(columnId: string) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const data = await request('/api/graphql', FindManyRequestDocument, {
        where: {
          story: {
            id: {
              equals: columnId,
            },
          },
        },
      });

      const unFinishedRequest = data.findManyRequest.filter((request) => request.endDate > Date.now());

      if (unFinishedRequest.length === 0) {
        const deleteStory = await request('/api/graphql', DeleteOneStoryDocument, {
          where: {
            id: columnId,
          },
        });
        const collection = await request('/api/graphql', FindUniqueCollectionDocument, {
          where: {
            id: '1',
          },
        });

        const updateCollection = await request('/api/graphql', UpdateOneCollectionDocument, {
          where: {
            id: '1',
          },
          data: {
            storyOrder: collection.findUniqueCollection.storyOrder.filter(
              (storyId) => storyId != deleteStory.deleteOneStory.id,
            ),
          },
        });
        dispatch(slice.actions.deleteColumnSuccess({ columnId }));
      }

      // const column = board.columns.find((c) => c.id === columnId);

      // if (column) {
      //   board.cards = board.cards.filter((card) => !column.cardIds.includes(card.id));
      // }

      // board.columns = board.columns.filter((id) => id !== columnId);
      // board.columnOrder = board.columnOrder.filter((id) => id !== columnId);

      // await axios.post('/api/kanban/columns/delete', { columnId });
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function persistColumn(newColumnOrder: string[]) {
  return async () => {
    const collectionData = await request('/api/graphql', UpdateOneCollectionDocument, {
      where: {
        id: '1',
      },
      data: {
        storyOrder: newColumnOrder,
      },
    });
    dispatch(slice.actions.persistColumn(newColumnOrder));
  };
}

// ----------------------------------------------------------------------

export function persistCard(columns: Record<string, KanbanColumn>) {
  return async () => {
    Object.keys(columns).forEach(async (storyId) => {
      const FindUniqueStoryWithItems = gql`
        query findUniqueStory($where: StoryWhereUniqueInput!) {
          findUniqueStory(where: $where) {
            id
            name
            doImage
            items {
              id
              name
            }
          }
        }
      `;
      const storyData = await request('/api/graphql', FindUniqueStoryWithItems, {
        where: {
          id: storyId,
        },
      });

      const deleteStoryItems = await request('/api/graphql', UpdateOneStoryDocument, {
        where: {
          id: storyId,
        },
        data: {
          itemIds: [],
          items: {
            disconnect: storyData.findUniqueStory.items.map((item) => {
              return {
                id: item.id
              }
            }),
          },
        },
      });

      const addStoryItems = await request('/api/graphql', UpdateOneStoryDocument, {
        where: {
          id: storyId,
        },
        data: {
          itemIds: columns[storyId].cardIds,
          items: {
            connect: columns[storyId].cardIds.map((cardId) => {
              return {
                id: cardId
              }
            })
          }
        },
      });
    });

    dispatch(slice.actions.persistCard(columns));
  };
}

// ----------------------------------------------------------------------

export function addTask({ card, columnId }: { card: Partial<KanbanCard>; columnId: string }) {
  return async () => {
    const newItem = await request('/api/graphql', CreateOneItemDocument, {
      data: {
        name: card.name,
        stories: {
          connect: {
            id: columnId,
          },
        },
      },
    });
    const story = await request('/api/graphql', FindUniqueStoryDocument, {
      where: {
        id: columnId,
      },
    });
    const updateStory = await request('/api/graphql', UpdateOneStoryDocument, {
      where: {
        id: columnId,
      },
      data: {
        itemIds: [...story.findUniqueStory.itemIds, newItem.createOneItem.id],
      },
    });
    dispatch(slice.actions.addTask({ card: { ...card, id: newItem.createOneItem.id }, columnId }));
  };
}

// ----------------------------------------------------------------------

export function deleteTask({ cardId, columnId }: { cardId: string; columnId: string }) {
  return async () => {
    const deleteItem = await request('/api/graphql', DeleteOneItemDocument, {
      where: {
        id: cardId,
      },
    });
    const story = await request('/api/graphql', FindUniqueStoryDocument, {
      where: {
        id: columnId,
      },
    });
    const updateStory = await request('/api/graphql', UpdateOneStoryDocument, {
      where: {
        id: columnId,
      },
      data: {
        itemIds: story.findUniqueStory.itemIds.filter((itemId) => itemId != deleteItem.id),
      },
    });
    dispatch(slice.actions.deleteTask({ cardId, columnId }));
  };
}
