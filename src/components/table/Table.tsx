import React, { ButtonHTMLAttributes } from 'react';
import Button from '../button/Button';
import './Table.css';

interface actionButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	name?: string;
	color?: string;
	icon?: string;
	onClick?: () => void;
	buttonConfig?: ButtonHTMLAttributes<HTMLButtonElement>;
}
interface TableProps {
	theadData: string[];
	tbodyData: any[];
	actionColumn?: boolean;
	action1?: actionButton;
	action2?: actionButton;
	columnMaxWidth?: number
}

const Table: React.FC<TableProps> = ({
	theadData,
	tbodyData,
	actionColumn,
	action1,
	action2,
	columnMaxWidth,
}) => {
	const buttonStyle = {
		borderRadius: 20,
		padding: '5px 14px',
		fontSize: 14,
	};

	const buttonStyleIcon = {
		borderRadius: 20,
		padding: '2px 14px',
		fontSize: 14,
	};

	return (
		<table className="table__wrapper">
			<thead className="table__heading">
				<tr>
					{theadData.map((item) => {
						return (
							<th key={item} title={item}>
								{item}
							</th>
						);
					})}
					{actionColumn ? <th>Aksi</th> : null}
				</tr>
			</thead>
			<tbody className="table__body">
				{tbodyData.map((item) => {
					return (
						<tr key={item.id}>
							{item.items.map((i: any) => {
								return (
									<td
										key={i}
										style={{ maxWidth: columnMaxWidth }}
									>
										{i}
									</td>
								);
							})}
							{actionColumn ? (
								<td className="table__column-actions">
									<div className="table__actions-wrapper">
										<Button
											color={action1?.color}
											name={action1?.name}
											icon={action1?.icon}
											iconSize={15}
											style={
												action2?.icon
													? buttonStyleIcon
													: buttonStyle
											}
											onClick={action1?.onClick}
											buttonConfig={action1?.buttonConfig}
										/>
										{action2 ? (
											<Button
												color={action2?.color}
												name={action2?.name}
												icon={action2?.icon}
												iconSize={15}
												style={
													action2?.icon
														? buttonStyleIcon
														: buttonStyle
												}
												onClick={action2?.onClick}
											/>
										) : null}
									</div>
								</td>
							) : null}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
