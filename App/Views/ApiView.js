import React from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
const ApiView = (props) => {
    const { goForFetch, fromFetch, renderItem, FlatListItemSeparator, dataSource, loading } = props
    return (
        <View style={styles.parentContainer}>
            <View style={{ marginHorizontal: 2 }}>
                <Text style={styles.textStyle}>En esta pantalla se obtendra una lista de usuarios como prueba para el consumo de una API</Text>
            </View>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Click para obtener los usuarios'}
                    onPress={goForFetch}
                    color='purple'
                />
            </View>



            {fromFetch ?
                <FlatList
                    data={dataSource}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                /> : <FlatList
                    data={null}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
        </View>
    )
}
export default ApiView;