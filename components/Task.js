import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../styles/theme.style.js';
import { Icon, CheckBox } from "react-native-elements";

const Task = (props) => {
    return (

        <View style={styles.item}>
            <View style={styles.itemLeft}>
            {/* <CheckBox style={styles.CheckBox} checked={{}} /> */}
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View >
                <Icon
                    color="#0CC"
                    iconProps={{}}
                    iconStyle={{}}
                    name="delete"
                   
                    size={20}
                    type="material"
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: theme.PRIMARY_COLOR,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#D9AFD9',
        opacity: 0.4,

    },
    itemText: {
        color: theme.SECONDARY_COLOR,
        maxWidth: '80%',
        paddingLeft: 20
    },
    CheckBox:{
        checkedColor: theme.SECONDARY_COLOR,
    }

});

export default Task;