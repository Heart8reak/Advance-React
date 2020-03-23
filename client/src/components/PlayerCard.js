import React from 'react'

import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
  } from 'reactstrap';

const PlayerCard = props => {
    return (
        <div>
            {/* {props.name}
            {props.country}
            {props.searches} */}

            <Card>
                <CardHeader>
                    {props.name}
                    <CardBody>
                        <CardTitle>
                            <CardText>
                            {props.country}
                            </CardText>
                        </CardTitle>
                    </CardBody>
                    <CardFooter>
                        Total Searches: {props.searches}
                    </CardFooter>
                </CardHeader>
            </Card>
            <br />
        </div>
    )
}

export default PlayerCard