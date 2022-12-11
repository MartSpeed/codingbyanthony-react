import { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        return(
             <input
                type = 'search'
<<<<<<< HEAD
                className={this.props.className}
=======
                className={` search-box ${this.props.className} `}
>>>>>>> dev/feat/searchbox
                placeholder={this.props.placeHolder}
                onChange={this.props.onChangeHandler}           
            />
        )
    }
}

export default SearchBox;