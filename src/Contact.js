import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.575785073624!2d77
      .11237437429786!3d28.732221179548876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3
      90d0139c30ac1fd%3A0x38a3628fa8ba5ebe!2sJindal%20Store!5e0!3m2!1sen!2sin!4v1720524694217!5m2!
      1sen!2sin" title='iframe' width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/manwyryb' method='POST' className='contact-inputs'>
            <input type='text' placeholder='Name' name='username' required autoComplete='off'/>
            <input type='email' placeholder='Email' name='Email' required autoComplete='off'/>
            <textarea placeholder='Enter Message' name='Message' cols={30} rows={10} required autoComplete='off'></textarea>
            <input type='submit' value='Send' />

          </form>
        </div>
      </div>


    </Wrapper>

  )
}

const Wrapper=styled.section`
  padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
`;
export default Contact