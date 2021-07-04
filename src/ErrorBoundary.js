import { Component } from "react";
import { Link } from "react-router-dom";





class ErrorBoundary extends Component {
    state = {
        hasError : false,
    }

    static getDerivedStateFromError(){
        return {hasError : true}
    }

    componentDidCatch(error, info){
        console.error("ErrorBoundary caught an error", error, info)

    }
    render() { 

        if(this.state.hasError){
            return(
                <div>
                    <h2>This listing has an error. <Link to="/">Click here</Link> to go back to the home page</h2>
                    
                </div>
            )
        }
        return this.props.children;
    }
}

<ErrorBoundary>
    <h1>hi there</h1>
</ErrorBoundary>
 
export default ErrorBoundary;