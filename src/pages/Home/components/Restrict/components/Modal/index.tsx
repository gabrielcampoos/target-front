import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface OpenModal {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	code: string;
	setCode: React.Dispatch<React.SetStateAction<string>>;
}

export default function ModalRestrict({
	open,
	setOpen,
	code,
	setCode,
}: OpenModal) {
	const navigate = useNavigate();

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Insira o código.'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<TextField
							label="Código"
							onChange={(ev) => setCode(ev.currentTarget.value)}
							value={code}
							type="password"
						/>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button
						onClick={() => {
							if (code === '380') {
								navigate('/portfolio');
							}
						}}
						autoFocus
					>
						Continuar
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
