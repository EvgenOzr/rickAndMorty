import React, {Component} from 'react'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const withData = (View) => {
    return class extends Component {
  
      state = {
        data: null,
        loading: true,
        error: false
      }
    
      componentDidUpdate(prevProps){
        if((this.props.getData !== prevProps.getData) || (this.props.page !== prevProps.page)) {
          this.update()
        }
      }

      componentDidMount(){
        this.update()
        // console.log(this.props);
      }
  
      update() {
        // console.log(this.props.page);
        this.setState({loading: true, error: false})
        let page = null
        if(this.props.page) page = this.props.page
        this.props.getData(page)
        .then((data) => {
          this.setState({data, loading: false})
        })
        .catch(() => {
          this.setState({error: true, loading: false})
        })
      }
      render (){
  
        const {data, loading, error} = this.state;
  
        if(loading) {
          return <Spinner/>
        }

        if(error) {
          return (
            <ErrorIndicator/>
          )
        }
  
        return <View {...this.props} data={data} />
      }
    }
}

export default withData;