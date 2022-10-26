import * as React from 'react';
import {
    DataGrid,
    gridPaginationSelector,
    gridPageSizeSelector,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { KeyboardArrowDown } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
// import { Link } from 'react-router-dom';
import { Button, FormControl, MenuItem, Select, IconButton, OutlinedInput, Autocomplete, TextField, Stack } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { FiEdit, FiTrash } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import formatRupiah from '../../../functions/formatRupiah';
axios.defaults.withCredentials = true;

const Transition = React.forwardRef(function Transition(props, ref) { 
    return <Slide direction='up' ref={ref} {...props} />
})

const roleList = [
    {id: 1, role: "Admin", value: 2},
    {id: 2, role: "Member", value: 3},
]

const data = [
    {id: 1, nama: "Antibiotik"},
    {id: 2, nama: "Anti-Inflamasi"},
    {id: 3, nama: "Analgesik"},
    {id: 4, nama: "Obat Tidur"},
    {id: 5, nama: "Ekspektoran"},
    {id: 6, nama: "Antipiretik"},
    {id: 7, nama: "Antipsikotik"},
    {id: 8, nama: "Antihipertensi"},
    {id: 9, nama: "Antidiare"},
]

function customCheckbox(theme) {
    return {
        '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
                }`,
            borderRadius: 2,
        },
        '& .MuiCheckbox-root svg path': {
            display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: '#1890ff',
            transform: 'none',
            top: '39%',
            border: 0,
        },
    };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        'Poppins',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-toolbarContainer': {
        height: "5rem",
        flexDirection: "row-reverse"
    },
    '& .MuiDataGrid-columnHeaderTitleContainer':{
        justifyContent: "center"
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        backgroundColor: "#bbdfc8",
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight: '600',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
        background: '#95dae1',
        color: 'white',
    },
    ...customCheckbox(theme),
}));

function CustomToolbar(props) {

    const currentUser = useSelector((state) => state.auth);
    const [openCreate, setOpenCreate] = React.useState(false);
    const [dataUser, setDataUser] = React.useState([]);

    // FORM STATES
    const [amount, setAmount] = React.useState(null);
    const [program, setProgram] = React.useState(null);
    const [sentBy, setSentBy] = React.useState(null);
    const [file, setFile] = React.useState(null);
    
    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);

    const handleClick = (e) => {
        props.setTablePage(e.target.value);
        if (props.counter < e.target.value) {
            props.setNewPageSize(props.counter);
        }
        else {
            props.setNewPageSize(e.target.value);
        }
    }

    const fetchDataUser = async() => {
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/user/getall", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        })
        .then(async(res) => {
            let hasil = await res.json();
            let hasilData = await hasil.data;
            let users = await hasilData.filter((item) => {
                if(item.userRole !== 1){
                    return item
                }
            })
            setDataUser(users);
        })
    }

    const createTransaction = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("amount", amount);
        formData.append("image", file);
        formData.append("program", program);
        formData.append("user_id", sentBy);

        await fetch("https://umrohwebsite.herokuapp.com/api/v2/create/transaction", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            },
            body: formData
        })
    }

    React.useEffect(() => {
        fetchDataUser();
    }, [])

    return (
        <GridToolbarContainer className='hms-gridtoolbar-container'>
            {/* <div className='hms-gridtoolbar-showdata'>
                <p className='me-2'>Show</p>
                <FormControl fullWidth className=''>
                    <Select
                        IconComponent={UnfoldMoreIcon}
                        value={props.tablePage}
                        onChange={(e) => handleClick(e)}
                        className="hms-small-textfield"
                    >
                        <MenuItem value={'10'}>10</MenuItem>
                        <MenuItem value={'25'}>25</MenuItem>
                        <MenuItem value={'50'}>50</MenuItem>
                        <MenuItem value={'75'}>75</MenuItem>
                        <MenuItem value={'100'}>100</MenuItem>
                    </Select>
                </FormControl>
                <p className='ms-2'>data</p>
            </div> */}
            <div className='d-flex'>
                <GridToolbarQuickFilter className='hms-form-quickcustom-mui me-2' />
                <GridToolbarExport className='hms-btn-exportcustom-mui me-2' />
                <GridToolbarFilterButton className='hms-btn-filtercustom-mui me-2' />
            </div>
        </GridToolbarContainer>
    );
}

function CustomPagination(props) {
    const apiRef = useGridApiContext();
    const selector = useGridSelector(apiRef, gridPaginationSelector);
    const row = useGridSelector(apiRef, gridPageSizeSelector);
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const getSizePage = props.totalPage > props.counter ? props.counter : props.totalPage;

    return (
        <div className='hms-pagination-datagrid'>
            <div className='hms-pagination-datagrid-textfooter'>
                <p>Shorting {getSizePage} of {props.counter}</p>
            </div>
            <Pagination
                color="primary"
                page={page + 1}
                count={pageCount}
                showFirstButton
                showLastButton
                shape='circular'
                renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
                onChange={(event, value) => {
                    let updatePageSize;

                    if (value === pageCount) {
                        updatePageSize = selector.rowCount;
                    }
                    else {
                        updatePageSize = row * value;
                    }

                    apiRef.current.setPage(value - 1);
                    apiRef.current.setPageSize(updatePageSize);

                    if (value === 1) {
                        props.setTotalPage(row);
                    }
                }}
            />
            <div className='hms-pagination-datagrid-textfooter'>
                <p>Page {page + 1} of {pageCount}</p>
            </div>
        </div>
    );
}

export default function TableRequest() {

    const [data, setData] = React.useState([]);
    const [tablePage, setTablePage] = React.useState(10);
    const [id, setId] = React.useState("1");
    const [oneUser, setOneUser] = React.useState(null);
    const [edit, setEdit] = React.useState(false)
    const [hapus, setHapus] = React.useState(false)
    const [type, setType] = React.useState(null);
    const [newPageSize, setNewPageSize] = React.useState(10);
    const [dataId, setDataId] = React.useState(null);
    const [add, setAdd] = React.useState(false);
    const [codes, setCodes] = React.useState([]);
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth);

    // FORM STATES
    const [role, setRole] = React.useState(null);
    const [userId, setUserId] = React.useState(null);
    const [codeId, setCodeId] = React.useState(null);

    const [openDecision, setOpenDecision] = React.useState(false);

    const handleOpenDecision = () => setOpenDecision(true);
    const handleCloseDecision = () => setOpenDecision(false)

    const fetchData = async(e) => {
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/requests", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        })
        .then(async(res) => {
            let hasil = await res.json();
            let hasildata = hasil.data;
            setData(hasildata);
        })

        await fetch("https://umrohwebsite.herokuapp.com/api/v1/codes", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        })
        .then(async(res) => {
            let hasil = await res.json();
            let hasilData = await hasil.data;
            setCodes(hasilData);
        })
    }

    const fetchDataUser = async(e) => {
        await fetch(`https://umrohwebsite.herokuapp.com/api/v1/userone/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        })
        .then(async(res) => {
            let hasil = await res.json();
            let hasilData = await hasil.data;
            setOneUser(hasilData);
        })
    }

    const updateRole = async(e) => {
        e.preventDefault();

        await fetch("https://umrohwebsite.herokuapp.com/api/v3/user/update/role", {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_role: role,
                user_id: userId,
                code_id: codeId,
            })
        })
    }

    React.useEffect(() => {
        fetchDataUser();
    }, [id])
    
    const columns = [
        { field: 'id', headerName: 'ID', hide: true },
        { field: 'no', headerName: 'No', flex: 0.1, align: "center"},
        { field: 'name', headerName: 'Nama', flex: 1, align: "center" },
        { field: 'stats', headerName: "Stats", hide: true },
        { field: "roles", headerName: "Target", renderCell: (params) => {
            if(params.row.roles == 2){
                return(
                    <>
                        Admin
                    </>
                )
            }else if(params.row.roles == 3){
                return(
                    <>
                        Member
                    </>
                )
            }
        }, align: "center", flex: 1 },
        { field: "type", headerName: "Keterangan", renderCell: (params) => {
            if(params.row.type == "role"){
                return(
                    <>
                        Upgrade Akun
                    </>
                )
            }else if(params.row.type == "transaction"){
                return(
                    <>
                        Transaksi
                    </>
                )
            }
        }, align: "center", flex: 1 },
        { headerName: "Status", renderCell: (param) => {
            if(param.row.stats == 0){
                return(
                    <>
                        <Button variant="outlined" size="small" onClick={handleOpenDecision}
                    sx={{
                        fontWeight: "600"
                    }}
                    >
                        Pending
                    </Button>
                    <Dialog
                        open={openDecision}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleOpenDecision}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Buat Laporan Transaksi"}</DialogTitle>
                        <DialogContent>
                            <div className='mb-3'>
                                <p className='input-label-text'>Role Tujuan</p>
                                <FormControl className='no-border' variant='standard' fullWidth>
                                        <Autocomplete
                                            options={roleList}
                                            getOptionLabel={option => `${option.role}`}
                                            renderInput={params => (
                                                <TextField {...params} placeholder={"Nama Supplier"} variant="outlined" />
                                            )}
                                            onChange={(e, newValue) => {
                                                setRole(newValue.value)
                                                setUserId(param.row.sentBy)
                                            }}
                                            className="hms-small-textfield mb-3"
                                        />
                                </FormControl>
                            </div>
                            <div className='mb-3'>
                                <p className='input-label-text'>Kode Leader</p>
                                <FormControl className='no-border' variant='standard' fullWidth>
                                    <Autocomplete
                                        options={codes}
                                        getOptionLabel={option => `${option.code}`}
                                        renderInput={params => (
                                            <TextField {...params} placeholder={"Nama Supplier"} variant="outlined" />
                                        )}
                                        onChange={(e, newValue) => {
                                            setCodeId(newValue.id)
                                        }}
                                        className="hms-small-textfield mb-3"
                                    />
                                </FormControl>
                            </div>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseDecision}>Disagree</Button>
                        <Button onClick={updateRole}>Agree</Button>
                        </DialogActions>
                    </Dialog>
                    </>
                )
            }else if(param.row.stats == 1){
                return(
                    <Button variant='outlined' size="small"
                    sx={{
                        fontWeight: "600"
                    }}
                    >
                        Disetujui
                    </Button>
                )
            }else if(param.row.stats == -1){
                return(
                    <>
                        Dibatalkan
                    </>
                )
            }
        }, align: "center", flex: 1 },
    ];

    const rows = data.map((data, index) => {
        var numb = index + 1;

        return {
            id: data.id,
            no: numb,
            sentBy: data.sentBy,
            name: `${data.sentby.firstName} ${data.sentby.lastName}`,
            stats: data.status,
            roles: data.toRole,
            type: data.type,
        }
    });

    React.useEffect(() => {
        fetchData()
    }, [])

        return (
            <div>
                <StyledDataGrid
                    pageSize={tablePage}
                    rowsPerPageOptions={[10, 25, 50, 75, 100]}
                    components={{
                        Pagination: CustomPagination,
                        Toolbar: CustomToolbar
                    }}
                    componentsProps={{
                        pagination: { counter: rows.length, totalPage: newPageSize, setTotalPage: setNewPageSize },
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                            setNewPageSize: setNewPageSize,
                            tablePage: tablePage,
                            setTablePage: setTablePage,
                            counter: rows.length
                        },
                    }}
                    localeText={{
                        toolbarFilters: "Filter",
                        toolbarExport: "Print Data",
                        toolbarQuickFilterPlaceholder: "Mencari data customer"
                    }}
                    rows={rows}
                    columns={columns}
                    autoHeight={true}
                    disableColumnMenu
                    checkboxSelection={false}
                    disableSelectionOnClick
                    onPageSizeChange={(totalPageSize) => setNewPageSize(totalPageSize)}
                    className="hms-table"
                />
            </div>
        );
    
}