import * as Factory from "factory.ts";
import faker from "faker";

import { GET_DETAILED_CONTENT, GET_ITEM_DETAILS, GET_PROCESS } from "./queries";

export const NutritionMock = Factory.Sync.makeFactory({
  calories: Factory.each(() => faker.random.number(10, 50)),
  protein: Factory.each(() => faker.random.number(10, 50)),
  fat: Factory.each(() => faker.random.number(10, 50)),
});

export const UserMock = Factory.Sync.makeFactory({
  userId: Factory.each(() => faker.random.uuid()),
  name: Factory.each(() => faker.name.firstName()),
  address: Factory.each(() => faker.random.number(10, 50)),
});

export const ItemDetailsMock = Factory.Sync.makeFactory({
  id: Factory.each(() => faker.random.uuid()),
  name: Factory.each(() => faker.name.firstName()),
  imageUrl: Factory.each(() => faker.image.image()),
  nutrition: NutritionMock.build(),
  componyLogoUrl: faker.image.avatar(),
  companyName: faker.name.firstName(),
  user: UserMock.build(),
});

export const ProcessMock = Factory.Sync.makeFactory({
  processId: Factory.each(() => faker.random.uuid()),
  heading: Factory.each(() => faker.name.firstName()),
  content: Factory.each(() => faker.random.words(10)),
  imageUrl: Factory.each(() => faker.image.avatar()),
});

export const DetailedContentMock = Factory.Sync.makeFactory({
  description: Factory.each(() => faker.random.words(10)),
});

export const processQueryMock = {
  request: {
    query: GET_PROCESS,
  },
  result: {
    data: {
      processes: ProcessMock.buildList(11),
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

export const detailedContentMock = {
  request: {
    query: GET_DETAILED_CONTENT,
  },
  result: {
    data: {
      content: DetailedContentMock.build(),
    },
  },
};
