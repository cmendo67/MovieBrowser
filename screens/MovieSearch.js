import React from "react"
import { StyleSheet, Text, View, TextInput, FlatList,ImageBackground, TouchableOpacity } from 'react-native';  
import { movie_search } from '../moviedata'
// const image = { uri: "https://www.jaxdailyrecord.com/sites/default/files/240725_standard.jpeg" };
export default class MovieSearch extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            movie_info: null,
            input_text:""
        }
    }

    componentDidUpdate(prevState){
        if(this.state.input_text !== prevState.input_text){
            this.fetchData(this.state.input_text);
        }
    }

    fetchData = async text =>{
      try{
        const output = await movie_search(text);
        this.setState({
            movie_info: output
        })
      }catch(error){
        console.error(error);
      }
    }

    handle_search = (input) =>{
      console.log(input)
        this.setState({
            input_text:input
        });
    }
    
      movie = ({ item }) => {
        return (
          <TouchableOpacity
            style={styles.movie_items}
            onPress={() => { 
              this.props.navigation.navigate("MovieDetails", {
                title: item.title,
                id: item.imdbID
              });
            }}
          >
            <View>
              <Text style={styles.movie_items_text}>{item.Title}</Text>
            </View>
          </TouchableOpacity>
        );
      };
    
      render() {
        return (
          <View style={styles.container}>
            {/* <ImageBackground source={image} style={styles.image}> */}
            <TextInput 
              style={styles.input_style}
              placeholderTextColor='white'
              placeholder="Search movies..."
              value={this.state.input_text}
              onChangeText={this.handle_search}
            />
            <FlatList
              data={this.state.movie_info}
              renderItem={this.movie}
              keyExtractor={(item) => item.Title + item.imdbID} 
            />  
            {/* </ImageBackground> */}
          </View>
        );
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1419',
  },
  movie_items: {
    backgroundColor: 'transparent',
    width: "80%",
    borderRadius: 5,
    marginTop:5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input_style: {
    width: "100%",
    marginTop:"5%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "#9932CC",
    color:"white",
    borderWidth: 1,
    marginBottom: 8,
    textAlign:"center",
},
image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
},
movie_items_text: {
  fontSize: 20,
  color:"white"
},
});