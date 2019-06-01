import React from 'react';

function Question(props) {
    return (
        <div>
            {props.content}
            <div class="button-wrapper">
                <a class="button">
                    {props.answer1}
                </a>
                <a class="button button-secondary">
                    {props.answer2}
                </a>
            </div>
        </div>
    );
}

export default Question;
