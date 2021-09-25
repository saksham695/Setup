import * as Factory from "factory.ts";
import faker from "faker";

import { GET_ITEM_DETAILS, GET_PROCESS } from "./queries";

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
  heading: Factory.each(() => faker.name.firstName()),
  content: Factory.each(() => faker.random.words(10)),
  imageUrl: Factory.each(() => faker.image.avatar()),
});

export const processQueryMock = {
  request: {
    query: GET_PROCESS,
  },
  result: {
    data: {
      processes: ProcessMock.buildList(9),
    },
  },
};

export const itemDetailsQueryMock = {
  request: {
    query: GET_ITEM_DETAILS,
  },
  result: {
    data: {
      itemDetail: ItemDetailsMock.build(),
    },
  },
};
