import React, { memo } from 'react';
// import { Card, CardBody, CardHeader, PaginationItem, PaginationLink } from 'reactstrap';

// import {useMergeState} from '../../../redux/hooks'
import {Pagination} from 'react-laravel-paginex'

export const PaginationRow = memo((props) => <Pagination {...props} />)
