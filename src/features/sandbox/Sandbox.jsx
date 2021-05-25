import React from "react"
import { useSelector } from "react-redux"
import { Button } from "semantic-ui-react"
import { useDispatch } from "react-redux"
import { increment, decrement } from "./testReducer"

export default function Sandbox() {

        const data = useSelector(state => state.test.data)
        const dispatch = useDispatch()

        return (
                <>
                        <h1>Testing</h1>
                        <h3>The data is: {data} </h3>
                        <Button onClick={() => dispatch(increment(20))} content="increment" color="green" />
                        <Button onClick={() => dispatch(decrement(10))} content="decrement" color="red" />
                </>
        )
}