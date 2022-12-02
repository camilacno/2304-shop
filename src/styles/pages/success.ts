import { styled } from '..'

export const SuccessContainer = styled('main', {
  height: 656,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    maxWidth: 560,
    textAlign: 'center',
  },

  a: {
    color: '$green500',
    display: 'block',
    cursor: 'pointer',
    fontSize: '$lg',
    fontWeight: 'bold',
    marginTop: '5rem',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 6,
  height: 145,
  margin: '4rem 0',
  maxWidth: 130,
  padding: '0.25rem',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
