import React from 'react';
import './App.css';
import Resizer from "react-image-file-resizer";
import defaultImage from './images/crepe.jpg';
import defaultOutputImage from './images/outputcrepe.png';
import axios from "axios";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.state = {
            inputImage: defaultImage,
            outputImage: defaultOutputImage,
            outputRecipeTitle: "Strawberry shortcake crepes",
            outputIngredientList: "sugar, egg, flour, salt, butter, cream, strawberries, extract, baking_powder, milk",
            outputRecipe: ['In a large bowl, whisk together the flour, baking powder, and salt.', 'In a separate bowl, whisk together the eggs, milk, sugar, and vanilla.', 'Add the wet ingredients to the dry and whisk until smooth.', 'Heat a lightly oiled griddle or frying pan over medium heat.', 'Pour or scoop the batter onto the griddle using approximately 1/4 cup for each crepe.', 'Cook until edges are dry, about 1 minute.', 'Flip and cook until the other side is golden brown, about 1 minute.', 'Repeat with the remaining batter.', 'Serve with strawberries, whipped cream, and a dusting of powdered sugar.'],
            specifiedIngredients: '',
        };
        
    }

    handleChange(event) {
        this.setState({specifiedIngredients: event.target.value});
      }

    fileChangedHandler(event) {
        var fileInput = false;
        if (event.target.files[0]) {
          fileInput = true;
        }
        if (fileInput) {
          try {
            Resizer.imageFileResizer(
              event.target.files[0],
              256,
              256,
              "JPG",
              100,
              0,
              (uri) => {
                console.log(uri);
                this.setState({ inputImage: uri });
              },
              "base64",
              200,
              200
            );
          } catch (err) {
            console.log(err);
          }
        }
      }

    handleSubmit(event) {
        event.preventDefault();
        var inputImage = this.state.inputImage;
        var specifiedIngredients = this.state.specifiedIngredients;
        var formData = new FormData();

        //Adding files to the formdata
        formData.append("inputImage", inputImage);
        formData.append("specifiedIngredients", specifiedIngredients);

        axios.post('upload_file', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })

        alert(
            `file: ${this.fileInput.current.files[0].name}, ingredients: ${this.state.specifiedIngredients}` 
        );
    }

    render() {
        return (
            <div id="demo" className="input-output">
                <div className="input">
                    <h2>Try Our Model!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <p>Input Image:</p>
                        <img src={this.state.inputImage}/>
                        <div className="imageUpload">
                            <label>
                                Upload your food image:  
                                <input
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    ref={this.fileInput}
                                    onChange={this.fileChangedHandler} />
                            </label>
                        </div>
                        <br />
                        <div className="formContainer">
                            <label>
                                List any specific ingredients you want in your dish:
                                <input
                                    name="specifiedIngredients"
                                    type="text"
                                    value={this.state.specifiedIngredients}
                                    onChange={this.handleChange} />
                            </label>
                        </div>
                        <br />
                        <div className="formContainer">
                            <button className="submit-button" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="output">
                    <h2>Output</h2>
                    <p>Output Image:</p>
                    <img src={this.state.outputImage}></img>
                    <h3>{this.state.outputRecipeTitle}</h3>
                    <div className="left-align">
                        <p><b>Ingredients: </b>{this.state.outputIngredientList}</p>
                        <p><b>Instructions: </b></p>
                        <ol>{this.state.outputRecipe.map(x => (<li>{x}</li>))}</ol>
                    </div>
                    
                    {/*<p>{this.state.specifiedIngredients}</p>*/}
                    
                </div>
            </div>
        );
    }
}
export default Form;