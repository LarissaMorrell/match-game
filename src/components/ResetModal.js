import React from 'react';
import { Button } from '@material-ui/core';

const ResetModal = ({ resetGamePress, cancelPress }) => (
	<div className="ResetModal">
		<h1>Are you sure?</h1>
		<p>You will be forfeiting this round.</p>
		<Button
			color="primary"
			size="medium"
			variant="contained"
			onClick={() => resetGamePress()}
		>
			Play Again!
		</Button>
		<Button
			size="medium"
			variant="outlined"
			onClick={() => resetGamePress(null)}
		>
			Change Level
		</Button>
		<Button
			size="medium"
			onClick={() => cancelPress()}
		>
			Cancel
		</Button>
	</div>
);

export default ResetModal;