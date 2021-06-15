import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
// @ts-ignore
import JsonFind from "json-find";


interface Values {
    search: string;
  }



 const  findObjectByKey = (drugs : any, value: any) => {
        const row :any = [];
       

        for (const drug of drugs.results) {
            //console.log(drug.generic_name);
            //console.log(value);
            console.log(drug.generic_name.search(/ value /i))
          }

        console.log(row);
        console.table(drugs.results.generic_name);
 }


export const SearchForm = () => {
    const Data = require('../data/medicaments.json');
    return (
        <Formik
        initialValues={{
        search: ''
        }}
        onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
        ) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            findObjectByKey(Data, values.search);
            setSubmitting(false);
        }, 500);
        }}
    >
        <Form>
        <label htmlFor="search">Recherche</label>
        <Field id="search" name="search" placeholder="Rechercher un médicaments…" />

        <button type="submit" className="btn btn-search" name="submit">RECHERCHER</button>
        </Form>
    </Formik>
    )
}


const Search  = () => {
        return (
            <>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 offset-md-3 text-center">
                           <section className="section-home">
                                
                                <h5 className="subtitle">Rechercher le médicament dans la liste</h5>
                                <SearchForm/>
                           </section>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Search;