import React, {Component} from 'react';
import FormHeader from "./FormComponents/FormHeader";
import Footer from "./HomeComponents/Footer";
import MainForm from "./FormComponents/MainForm";

class Form extends Component {
    render() {
        return (
            <>
                <FormHeader />
                <MainForm />
                <Footer />
            </>
        )
    }
}

export default Form