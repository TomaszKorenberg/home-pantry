import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import confirmButotn from "../../assets/accept-button.png"


class Form extends React.Component {
    state = {
        name: null,
        count: null,
        minCount: null
    };
    render(){
        return(
    <AppContext.Consumer>
        {context => (
    <form className={styles.wrapper} autoComplete="off" onSubmit={(e) => context.addItemFn(e, this.state)}>
        <input className={styles.input}
               required
               type={"text"}
               onChange={(e) => this.setState({name:e.target.value})}
               name={"name"} placeholder={"Nazwa produktu"}/>


        <input className={styles.input}
               required
               type={"text"}
               onChange={(e) => this.setState({count:e.target.value})}
               name={"count"}
               placeholder={"Aktualna ilość"}/>


        <input className={styles.input}
               required
               type={"text"}
               onChange={(e) => this.setState({minCount:e.target.value})}
               name={"minCount"}
               placeholder={"Minimalna ilość"}/>


        <button className={styles.button}><img className={styles.buttonIcon} alt={"confirm-button"} src={confirmButotn}/></button>
    </form>)
        }
    </AppContext.Consumer>
)}}

export default Form;
