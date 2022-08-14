import React, { ButtonHTMLAttributes } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import Button from '../button/Button';
import Pagination from '../pagination/Pagination';
import './Table.css';

interface actionButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	name?: string;
	color?: string;
	icon?: string;
	onClick?: () => void;
	onClickUpdate?: (arg: string) => void;
	buttonConfig?: ButtonHTMLAttributes<HTMLButtonElement>;
}
interface TableProps {
	theadData: string[];
	tbodyData: any[];
	actionColumn?: boolean;
	action1?: actionButton;
	action2?: actionButton;
	columnMaxWidth?: number;
	id?: string
	onClick?: (arg: string) => void
	filter?: string
}

const Table: React.FC<TableProps> = ({
	theadData,
	tbodyData,
	actionColumn,
	action1,
	action2,
	columnMaxWidth,
	id,
	onClick,
	filter = ""
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
					{theadData.map((item, index) => {
						return (
							<th key={index} title={item}>
								{item}
							</th>
						);
					})}
					{actionColumn ? (
						<th className="table__column-actions">Aksi</th>
					) : null}
				</tr>
			</thead>
			<tbody className="table__body">
				{tbodyData.length > 0 ? (
					tbodyData.map((item) => {
						return (
							<tr key={item.id}>
								{item.items.map((i: any, index: number) => {
									return (
										<td
											key={index}
											style={{ maxWidth: columnMaxWidth }}
										>
											{i}
										</td>
									);
								})}
								{actionColumn ? (
									<td>
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
												// onClick={action1?.onClick}
												onClick={
													action1?.onClickUpdate
														? () =>
																action1?.onClickUpdate
																	? action1?.onClickUpdate(
																			item.id
																	  )
																	: null
														: action1?.onClick
												}
												buttonConfig={
													action1?.buttonConfig
												}
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
													onClick={
														action2?.onClickUpdate
															? () =>
																	action2?.onClickUpdate
																		? action2?.onClickUpdate(
																				item.id
																		  )
																		: null
															: action2?.onClick
													}
												/>
											) : null}
										</div>
									</td>
								) : null}
							</tr>
						);
					})
				) : (
					<tr>
						<td
							colSpan={theadData.length + 1}
							className="table__column-empty"
						>
							<div className="table_column-empty-msg">
								<AiFillExclamationCircle
									color="F36868"
									size={20}
								/>{' '}
								Data tidak ditemukan atau kosong.
							</div>
						</td>
					</tr>
				)}
			</tbody>
			{tbodyData.length > 10 ? (
				<tfoot>
					<tr>
						<td colSpan={theadData.length + 1}>
							<Pagination />
						</td>
					</tr>
				</tfoot>
			) : null}
		</table>
	);
};

export default Table;
