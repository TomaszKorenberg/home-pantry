import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import confirmButotn from "../../assets/accept-button.png"


class Form extends React.Component {
    state = {
        name: !this.props.props ? null : this.props.props.name,
        count: !this.props.props ? null : this.props.props.count,
        minCount: !this.props.props ? null : this.props.props.minCount,
    };


    render(){

        return(

    <AppContext.Consumer>
        {context => (

    <form className={styles.wrapper}
          autoComplete="off"
          onSubmit={!this.props.props
              ? ((e) => context.addItemFn(e, this.state))
              : ((e) => context.updateItemFn(e, this.props.props, this.state))}>



        <input className={styles.input}
               required
               type={"text"}
               defaultValue={this.props.props ? this.props.props.name : ""}
               onChange={(e) => this.setState({name:e.target.value})}
               name={"name"}
               placeholder={"Nazwa produktu"}/>

        <input className={styles.input}
               required
               type={"text"}
               defaultValue={this.props.props ? this.props.props.count : ""}
               onChange={(e) => this.setState({count:e.target.value})}
               name={"count"}
               placeholder={"Aktualna ilość"}/>


        <input className={styles.input}
               required
               type={"text"}
               defaultValue={this.props.props ? this.props.props.minCount : ""}
               onChange={(e) => this.setState({minCount:e.target.value})}
               name={"minCount"}
               placeholder={"Minimalna ilość"}/>


        <button className={styles.button}><img className={styles.buttonIcon} alt={"confirm-button"} src={confirmButotn}/></button>
    </form>)
        }
    </AppContext.Consumer>
)}}

export default Form;
