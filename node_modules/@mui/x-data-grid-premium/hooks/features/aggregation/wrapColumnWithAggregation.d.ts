import * as React from 'react';
import { GridColDef, GridFilterOperator } from '@mui/x-data-grid-pro';
import { GridBaseColDef } from '@mui/x-data-grid-pro/internals';
import { GridApiPremium } from '../../../models/gridApiPremium';
import { GridAggregationRule } from './gridAggregationInterfaces';
declare const AGGREGATION_WRAPPABLE_PROPERTIES: readonly ["valueGetter", "valueFormatter", "renderCell", "renderHeader", "filterOperators"];
type WrappableColumnProperty = (typeof AGGREGATION_WRAPPABLE_PROPERTIES)[number];
interface GridColDefWithAggregationWrappers extends GridBaseColDef {
    aggregationWrappedProperties: {
        name: WrappableColumnProperty;
        originalValue: GridBaseColDef[WrappableColumnProperty];
        wrappedValue: GridBaseColDef[WrappableColumnProperty];
    }[];
}
/**
 * Add a wrapper around each wrappable property of the column to customize the behavior of the aggregation cells.
 */
export declare const wrapColumnWithAggregationValue: ({ column, apiRef, aggregationRule, }: {
    column: GridBaseColDef;
    apiRef: React.MutableRefObject<GridApiPremium>;
    aggregationRule: GridAggregationRule;
}) => GridBaseColDef;
/**
 * Remove the aggregation wrappers around the wrappable properties of the column.
 */
export declare const unwrapColumnFromAggregation: ({ column, }: {
    column: GridColDef | GridColDefWithAggregationWrappers;
}) => GridBaseColDef<any, any, any> | {
    field: string;
    headerName?: string | undefined;
    description?: string | undefined;
    width?: number | undefined;
    flex?: number | undefined;
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    hideable?: boolean | undefined;
    sortable?: boolean | undefined;
    sortingOrder?: import("@mui/x-data-grid-pro").GridSortDirection[] | undefined;
    resizable?: boolean | undefined;
    editable?: boolean | undefined;
    groupable?: boolean | undefined;
    pinnable?: boolean | undefined;
    sortComparator?: import("@mui/x-data-grid-pro").GridComparatorFn<any> | undefined;
    getSortComparator?: ((sortDirection: import("@mui/x-data-grid-pro").GridSortDirection) => import("@mui/x-data-grid-pro").GridComparatorFn<any> | undefined) | undefined;
    type?: import("@mui/x-data-grid-pro").GridColType | undefined;
    align?: import("@mui/x-data-grid-pro").GridAlignment | undefined;
    valueGetter?: import("@mui/x-data-grid-pro").GridValueGetter<import("@mui/x-data-grid-pro").GridValidRowModel, any, any, never> | undefined;
    valueSetter?: import("@mui/x-data-grid-pro").GridValueSetter<import("@mui/x-data-grid-pro").GridValidRowModel, any, any> | undefined;
    valueFormatter?: import("@mui/x-data-grid-pro").GridValueFormatter<import("@mui/x-data-grid-pro").GridValidRowModel, any, any, never> | undefined;
    valueParser?: import("@mui/x-data-grid-pro").GridValueParser<import("@mui/x-data-grid-pro").GridValidRowModel, any, any> | undefined;
    cellClassName?: import("@mui/x-data-grid-pro").GridCellClassNamePropType<import("@mui/x-data-grid-pro").GridValidRowModel, any> | undefined;
    display?: "text" | "flex" | undefined;
    renderCell?: ((params: import("@mui/x-data-grid-pro").GridRenderCellParams<import("@mui/x-data-grid-pro").GridValidRowModel, any, any, import("@mui/x-data-grid-pro").GridTreeNodeWithRender>) => React.ReactNode) | undefined;
    renderEditCell?: ((params: import("@mui/x-data-grid-pro").GridRenderEditCellParams<import("@mui/x-data-grid-pro").GridValidRowModel, any, any, import("@mui/x-data-grid-pro").GridTreeNodeWithRender>) => React.ReactNode) | undefined;
    preProcessEditCellProps?: ((params: import("@mui/x-data-grid-pro").GridPreProcessEditCellProps<any, any>) => import("@mui/x-data-grid-pro").GridEditCellProps<any> | Promise<import("@mui/x-data-grid-pro").GridEditCellProps<any>>) | undefined;
    headerClassName?: import("@mui/x-data-grid-pro").GridColumnHeaderClassNamePropType | undefined;
    renderHeader?: ((params: import("@mui/x-data-grid-pro").GridColumnHeaderParams<import("@mui/x-data-grid-pro").GridValidRowModel, any, any>) => React.ReactNode) | undefined;
    headerAlign?: import("@mui/x-data-grid-pro").GridAlignment | undefined;
    hideSortIcons?: boolean | undefined;
    disableColumnMenu?: boolean | undefined;
    filterable?: boolean | undefined;
    filterOperators?: GridFilterOperator<import("@mui/x-data-grid-pro").GridValidRowModel, any, any>[] | undefined;
    getApplyQuickFilterFn?: import("@mui/x-data-grid-pro").GetApplyQuickFilterFn<import("@mui/x-data-grid-pro").GridValidRowModel, any> | undefined;
    disableReorder?: boolean | undefined;
    disableExport?: boolean | undefined;
    colSpan?: number | import("@mui/x-data-grid-pro").GridColSpanFn<import("@mui/x-data-grid-pro").GridValidRowModel, any, any> | undefined;
    renderHeaderFilter?: ((params: import("@mui/x-data-grid-pro").GridRenderHeaderFilterProps) => React.ReactNode) | undefined;
    aggregable?: boolean | undefined;
    availableAggregationFunctions?: string[] | undefined;
    groupingValueGetter?: import("../../..").GridGroupingValueGetter<import("@mui/x-data-grid-pro").GridValidRowModel> | undefined;
    pastedValueParser?: import("../../..").GridPastedValueParser<import("@mui/x-data-grid-pro").GridValidRowModel, any, any> | undefined;
};
export {};
