import * as fetchDrugs from "./fetchDrugs";
import dataDrugs from "../data/drugs.test.json";

test("load json file", () => {
  expect(fetchDrugs.load).toBeDefined();

  const result = fetchDrugs.load(dataDrugs);

  expect(result).not.toBeNull();

  expect(result).toBeDefined();

  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
      }),
    ])
  );
});

test("find data in json file", () => {
  const data = fetchDrugs.load(dataDrugs);
  let search = "ANASTROZOLE";

  expect(fetchDrugs.search).toBeDefined();
  const result = fetchDrugs.search(data, search);

  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
      }),
    ])
  );

  expect(result[0].id).toEqual(60002283);
  expect(result[0].title).toContain(search);
});
