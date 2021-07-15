import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/react';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Formulario = styled ('form')({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '20px'

})

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

/*const Label = styled ('label')({
	display: 'block',
	fontWeight: '700',
	padding: '10px',
	minHeight: '40px',
	cursor: 'pointer'
})*/

const GrupoInput = styled ('div')({
	position: 'relative',
	zIndex: '90'
})

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

/*const Input = styled ('input') ({
	width: '100%',
	background: '#fff',
	borderRadius: '3px',
	height: '45px',
	lineHeight: '45px',
	padding: '0 40px 0 10px',
	border: '3px solid transparent'

})*/

const LeyendaError = styled ('p')({
	fontSize: '12px',
	marginBottom: '0px',
	color: `${colores.error}`,
	display: 'none'
})

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}
	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;



const ContenedorTerminos = styled ('div')({
	gridColumn: 'span 2'
})

const ContenedorBotonCentrado = styled ('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gridColumn: 'span 2'
})

const Boton = styled ('button')({
	height: '45px',
	lineHeight: '45px',
	width: '30%',
	background:'#000',
	color:'#fff',
	fontWeight: 'bold',
	border:'none',
	borderRadius: '3px',
	cursor: 'pointer'

})
	


const MensajeExito = styled ('p') ({
	fontSize: '14px',
	color: `${colores.exito}`

})

const MensajeError = styled ('div')({
	height: '45px',
	lineHeight: '45px',
	background: '#F66060',
	padding: '0px 15px',
	borderRadius: '3px',
	gridColumn: 'span 2',
	
})

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};

