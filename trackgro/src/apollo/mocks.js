import * as Factory from "factory.ts";
import faker from "faker";
import { Book, Author, Query } from "./types";
import { MockedResponse } from "@apollo/client/testing";
import { GET_BOOKS } from "./queries";

export const NutritionMock = Factory.Sync.makeFactory({
  calories: Factory.each(() => faker.random.number(10, 50)),
  protein: Factory.each(() => faker.random.number(10, 50)),
  fat: Factory.each(() => faker.random.number(10, 50)),
});

export const ItemDetailsMock = Factory.Sync.makeFactory({
  id: Factory.each(() => faker.random.uuid()),
  name: Factory.each(() => faker.name.firstName()),
  imageUrl: Factory.each(() => faker.image.image()),
  nutrition: NutritionMock.build(),
});

export const ProcessMock = Factory.Sync.makeFactory({
  processId: Factory.each(() => faker.random.uuid()),
  heading: Factory.each(() => faker.random.words()),
  content: Factory.each(() => faker.random.words()),
  imageUrl: Factory.each(() => faker.image.avatar()),
});

export const booksQueryMock = {
  request: {
    query: GET_BOOKS,
  },
  result: {
    data: {
      books: ProcessMock.buildList(10),
      //   nutrition: ItemDetailsMock.build(),
    },
  },
};
