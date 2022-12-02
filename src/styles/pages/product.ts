import { styled } from '..'

export const ProductContainer = styled('main', {
  margin: '0 auto',
  maxWidth: 1180,

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 6,
  height: 656,
  maxWidth: 576,
  padding: '0.25rem',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    color: '$green300',
    display: 'block',
    fontSize: '$2xl',
    marginTop: '1rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
    marginTop: '2.5rem',
  },

  button: {
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 6,
    color: '$white',
    cursor: 'pointer',
    fontSize: '$md',
    fontWeight: 'bold',
    marginTop: 'auto',
    padding: '1.25rem',

    transition: 'backgroundColor, 0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
