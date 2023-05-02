import './App.css';
import Navbar from './Navbar';
import About from './About';
import Form from './Form';
import Typewriter from 'typewriter-effect';


function App() {

  return (
    <body>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div id="home">
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.changeDelay(50)
                  .typeString('Welcome to LunchPad, a project that uses AI to make boring food fancy!')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .start();
                }}
              />
            </h1>
          </div>
          <About />
          <Form />
        </header>
      </div>
    </body>

  );
}

export default App;
