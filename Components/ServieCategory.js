import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import ServiceImages from './ServiceImages'

const ServieCategory = () => {
  return (
    <View>
        <SafeAreaView style={{alignItems:'center'}}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[0].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[0].name}</Text>
                    </View>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[1].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 50, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[1].name}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[2].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[2].name}</Text>
                    </View>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[3].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[3].name}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[4].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[4].name}</Text>
                    </View>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[5].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 10, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[5].name}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[6].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 50, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[6].name}</Text>
                    </View>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[7].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[7].name}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[8].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[8].name}</Text>
                    </View>
                    <View style={styles.rowbox}>
                        <Image source={{ uri: ServiceImages[9].image }} style={styles.img} />
                        <Text style={{ position: 'absolute', bottom: 30, left: 50, fontSize: 15, fontWeight: '500', color: 'white' }}>{ServiceImages[9].name}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default ServieCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
    
        flex: 1,
        marginTop: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    },
    img: {
        backgroundColor: 'black',
        opacity: 0.5,
        height: 185,
        width: 185,
        flex: 1,
        aspectRatio: 1,
        marginHorizontal: 5,
        borderRadius: 15
    },
    });