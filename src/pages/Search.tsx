import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
// @ts-ignore
import JsonFind from "json-find";
import { load, search } from "../services/fetchDrugs";

interface Values {
  search: string;
}

export const SearchForm = () => {
  const Data = require("../data/drugs.json");
  const data = load(Data);

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          let searching = search(data, values.search);
          console.log(searching);
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        <label htmlFor="search">Recherche</label>
        <Field
          id="search"
          name="search"
          placeholder="Rechercher un médicaments…"
        />

        <button type="submit" className="btn btn-search" name="submit">
          RECHERCHER
        </button>
      </Form>
    </Formik>
  );
};

const Search = () => {
  return (
    <>
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-6 offset-md-3 text-center">
            <section className="section-home">
              <h5 className="subtitle">
                Rechercher le médicament dans la liste
              </h5>
              <SearchForm />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
