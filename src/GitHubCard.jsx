import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
    return (
        <>

            <Card>

                <Card.Img src='https://avatars.githubusercontent.com/u/107085436?v=4' />
                <Card.Body>
                    <Card.Title>
                        John Capovani - Aspiring Software Developer
                    </Card.Title>
                    <Card.Text>
                        Eager to learn and apply my learnings to real world applications. - A Lifestyle Clothing Creator
                    </Card.Text>


                </Card.Body>


            </Card>


        </>
    )
}

export default GitHubCard