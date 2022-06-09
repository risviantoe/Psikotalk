import React from 'react';
import Button from '../button/Button';
import './Table.css';

interface TableProps {
	theadData: string[];
	tbodyData: any[];
    actionColumn?: boolean;
    action1?: {name?: string, color?: string, icon?: string}
    action2?: {name?: string, color?: string, icon?: string}
}

const Table: React.FC<TableProps> = ({
	theadData,
	tbodyData,
    actionColumn,
    action1,
    action2
}) => {

    const buttonStyle = {
		borderRadius: 20,
		padding: '2px 14px',
        fontSize: 14
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
								return <td key={i}>{i}</td>;
							})}
							{actionColumn ? (
								<td>
									<div className="table__column-actions">
										<Button
											color={action1?.color}
											name={action1?.name}
											icon={action1?.icon}
											iconSize={15}
											style={buttonStyle}
										/>
										<Button
											color={action2?.color}
											name={action2?.name}
											icon={action2?.icon}
											iconSize={15}
											style={buttonStyle}
										/>
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
