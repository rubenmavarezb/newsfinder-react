import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Form = ({saveCategory}) => {
    
    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'},
    ]
        
    
    const [category, SelectNews] = useSelect('General', OPTIONS);

    const searchNews = (e) => {
        e.preventDefault();
        saveCategory(category);
    }

    return ( 
        <div className={`${styles.search} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Find news by category</h2>

                    <SelectNews/>
                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles['block-btn']} btn-large amber darken-2`}
                            value='Search...'
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Form.propTypes = {
    saveCategory: PropTypes.func.isRequired
}
 
 
export default Form;