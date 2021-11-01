const initialState = `
This is a paragraph.
**This is bolded**

> Block Quotes!

# Headline 1
## Headline 2

- list item 1
- list item 2

[Visit my website](http://fazlibalkan.github.io)

This is an inline \`<div></div>\`

This is a block of code

\`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
\`\`\`

![freeCodeCamp](https://icon-library.com/images/small-icon-images/small-icon-images-25.jpg)


`;

class App extends React.Component {
    state ={
        text: initialState
    }

    handleChange = (x) => {
        this.setState({
            text: x.target.value
        })
    }

    render () {
        const { text } = this.state;

        const markdown = marked(text);

        return (
            <div>
                <h2 className="header text-center m-4">Markdown Previewer</h2>
                <div className="row">


                    <div className="col-6">
                        <h5>Enter your markdown here</h5>
                        <textarea className="form-control" id="editor" value={text} onChange={this.handleChange}></textarea>
                    </div>

                    <div className="col-6" >
                        <h5>Here is the result</h5>
                        <div id="preview" className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} />
                    </div>



                </div>
                
            </div>
        );
    }
        
}

ReactDOM.render(<App/>, document.getElementById("root"))