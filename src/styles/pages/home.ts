import { styled } from '..'

export const HomeContainer = styled('main', {
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  // gap: '1rem', -> não entende esse gap para contar no container do slide, produto fica menor
})

export const Product = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 6,
  cursor: 'pointer',
  overflow: 'hidden',
  // padding: '0.25rem', -> same as above, changed to spacing in slider config
  position: 'relative',

  img: {
    marginBottom: '1rem',
    objectFit: 'fill',
  },

  footer: {
    background: 'rgba(32, 32, 36, 0.9)',
    borderRadius: 6,

    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',
    padding: '1rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
    },

    span: {
      color: '$green300',
      fontSize: '$xl',
      fontWeight: 'bold',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
