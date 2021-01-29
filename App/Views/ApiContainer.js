import React, { Component } from 'react';
import ApiView from './ApiView';
import styles from './ApiStyles';
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fromFetch: false,
            dataSource: []
        };
    }
    goForFetch = () => {
        this.setState({
            fromFetch: true,
            loading: true,

        })
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting users data', responseJson)
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        dataSource: responseJson
                    })
                }, 2000)

            })
            .catch(error => console.log(error))
    }

    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.list}>
                <Text style={styles.lightText}>{data.item.name}</Text>
                <Text style={styles.lightText}>{data.item.email}</Text>
                <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
        )

    }


    render() {
        const { dataSource, fromFetch, loading } = this.state
        return (
            <ApiView
                goForFetch={this.goForFetch}
                dataSource={dataSource}
                loading={loading}
                fromFetch={fromFetch}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ApiContainer;