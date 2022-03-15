import './datatable.scss'

import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../dataTableSource'
import {Visibility, Delete} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Datatable() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const actionColoumn = [
        {
            field : "action",
            headerName : "Action",
            width : 200,
            renderCell : (params) => {
                return (
                    <div className="cellAction">
                        <Link to='/users/test' style={{textDecoration : "none"}}>
                            <div className="viewButton">
                                <Visibility />
                                View
                            </div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)} >
                            <Delete />
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add new user
                <Link to='/users/new' className="linkButton" style={{textDecoration : "none"}}>
                    Add Now
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColoumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
