import React from "react"
import { StyleSheet, Text, View, Image } from 'react-native';  
import { movie_Id } from '../moviedata'
// const image = { uri: "https://www.jaxdailyrecord.com/sites/default/files/240725_standard.jpeg" };

export default class Movie_Info extends React.Component{

    constructor(props){
        super(props)
        this.state={
            movieDetail:null
        }
    }

    //Id parameters from movie search navigation
    componentDidMount(){
        this.get_Movie(this.props.route.params.id);
    }

    //get id results from movie_Id
    get_Movie = async id =>{
        try{
            const output = await movie_Id(id);
            this.setState({
                movieDetail:output
            })
        }catch(error){
            console.err(error)
        }
    }

    render() {
        return (
          <View style={styles.container}>
            <View >
              {this.state.movieDetail && this.state.movieDetail.Poster ? (
                <Image
                  source={{ uri: this.state.movieDetail.Poster }}
                  style={styles.image_constraints}
                />
              ) : null}
            </View>
            <View>
              {this.state.movieDetail && (
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>{this.state.movieDetail.Title} </Text>
                    <Text style={styles.title}> ({this.state.movieDetail.Year})</Text>
                  </View>
                  <Text style={styles.text}>Plot: {this.state.movieDetail.Plot}</Text>
                  <Text style={styles.text}>Rated:{this.state.movieDetail.Rated} </Text>
                  <Text style={styles.text}>Runtime: {this.state.movieDetail.Runtime} </Text>
                  <Text style={styles.text}>IMDB Rating: ({this.state.movieDetail.imdbRating}/10)</Text>
                  <Text style={styles.text}>Cast: {this.state.movieDetail.Actors}</Text>
                  <Text style={styles.text}>Genre: {this.state.movieDetail.Genre}</Text>
                </View>
              )}
            </View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#0d1419',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image_constraints: {
        marginTop:5,
        width: 280,
        height: 380,
        marginBottom: 10,
      },
      text:{
        color:"white",
        justifyContent:"center"
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },
    });