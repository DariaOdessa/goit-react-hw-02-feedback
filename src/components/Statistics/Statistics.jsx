import PropTypes from 'prop-types';
import Notification from "../Notification/Notification";
import { StatName, StatList, StatValue } from './Statictics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
            total > 0
                ?
                (<StatList>
                   <StatName> Good: 
                        <StatValue>{good}</StatValue>
                    </StatName>
                    <StatName> Neutral: 
                        <StatValue>{neutral}</StatValue>
                    </StatName>
                    <StatName> Bad: 
                        <StatValue>{bad}</StatValue>
                    </StatName>
                    <StatName> Total:
                        <StatValue>{total}</StatValue>
                    </StatName>
                    <StatName> Positive feedback:
                        <StatValue>{positivePercentage}%</StatValue>
                    </StatName> 
            </StatList>)
            : <Notification message='There is no feedback' />   
        
    );
    
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
