import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF781B',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black',
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
    box: {
        height: '80%',
        width: '100%',
        backgroundColor: '#00E3FF'
    },

    box1: {
        height: '20%',
        width: '100%',
        backgroundColor: '#FF6347',
        justifyContent: 'space-around',
    },

    botonI: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 50,
        marginRight: 15,
        width: '15%',
        alignSelf: 'flex-end',
    },

    botonN: {
        alignItems: 'center',
        backgroundColor: '#00FF00',
        padding: 10,
        borderRadius: 20,
        marginLeft: 35,
        marginRight: 35,
    },

    text1: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },

    imagen: {
        height: 350,
        width: '100%',
    },

    ///////////////////Producto/////////////////////////

    productContainer: {
      padding: 10,
      backgroundColor: '#FF1C1C',
    },
    productContainer1: {
      marginBottom: 20,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      borderColor: '#000000',
      borderRadius: 10,
      padding: 10,
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 5,
      marginBottom: 10,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'black',
    },
    productPrice: {
      fontSize: 14,
      marginBottom: 5,
      color: 'black',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    quantityText: {
      marginHorizontal: 10,
      fontSize: 16,
      color: 'black',
    },
    ////////////////////Carrito//////////////////////////7

    carritocontainer: {
      padding: 20,
      backgroundColor: '#1CFF76',
    },
    carritocontainer1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    carritoImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    carritoInfo: {
      flex: 1,
    },
    carritoName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'black',
    },

    ///////////////////////////Ticket/////////////////////////////////////

    itemcontainer: {
      padding: 20,
      backgroundColor: '#FFF',
      flex: 1,
    },
    itemtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: 'black',
    },
    itemtitle1: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black',
    },
    date: {
      fontSize: 16,
      marginBottom: 10,
      color: 'black',
      textAlign: 'center',
    },
    itemContainer: {
      marginBottom: 15,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
    itemText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
    total: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1CFF76',
      textAlign: 'center',
    },

    ////////////////////////////////Login////////////////////////////////

    logincontainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    logintitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: 'black',
    },
    loginlabel: {
      fontSize: 16,
      marginBottom: 5,
      color: 'black',
    },
    logininput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      color: 'black',
    },

});
