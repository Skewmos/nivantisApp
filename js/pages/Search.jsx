import * as React from 'react';
import { Formik, Field, Form } from 'formik';
export const SearchForm = () => {
    return (<Formik initialValues={{
            search: ''
        }} onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
        }}>
        <Form>
        <label htmlFor="search">Recherche</label>
        <Field id="search" name="search" placeholder="Rechercher un médicaments…"/>

        <button type="submit" className="btn btn-search" name="submit">RECHERCHER</button>
        </Form>
    </Formik>);
};
const Search = () => {
    return (<>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 offset-md-3 text-center">
                           <section className="section-home">
                                
                                <h5 className="subtitle">Rechercher le médicament dans la liste</h5>
                                <SearchForm />
                           </section>
                        </div>
                    </div>
                </div>
            </>);
};
export default Search;
