import * as React from 'react';
import { useSearchParams } from 'react-router-dom';


// higher order function so that the hook useSearchParams can be used in a class
export default function withSearchParams(Component) {
    return function ComponentWithSearchParams (props) {
       const [searchParams] = useSearchParams()

       return <Component {...props} router={{ searchParams }} />

    };
}
