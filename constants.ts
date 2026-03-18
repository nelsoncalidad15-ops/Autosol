
import { AutoRecord, AreaConfig, AreaType, ReportTemplate } from './types';

// Mock data based on the user's provided Excel snippet
export const MOCK_DATA: AutoRecord[] = [
  { id: '1', mes: 'Enero', anio: 2026, sucursal: 'Santa Fe', ppt_diarios: 27.41, avance_ppt: 603, servicios_diarios: 17.86, servicios_totales: 393, objetivo_mensual: 480, dias_laborables: 22 },
  { id: '2', mes: 'Enero', anio: 2026, sucursal: 'Jujuy', ppt_diarios: 23.95, avance_ppt: 527, servicios_diarios: 13.73, servicios_totales: 302, objetivo_mensual: 400, dias_laborables: 22 },
  { id: '3', mes: 'Enero', anio: 2026, sucursal: 'Express', ppt_diarios: 8.09, avance_ppt: 178, servicios_diarios: 4.82, servicios_totales: 106, objetivo_mensual: 140, dias_laborables: 22 },
  { id: '4', mes: 'Enero', anio: 2026, sucursal: 'Taller Movil', ppt_diarios: 6.4, avance_ppt: 64, servicios_diarios: 5.4, servicios_totales: 54, objetivo_mensual: 60, dias_laborables: 10 },
  
  { id: '5', mes: 'Febrero', anio: 2026, sucursal: 'Santa Fe', ppt_diarios: 29.63, avance_ppt: 563, servicios_diarios: 17.84, servicios_totales: 339, objetivo_mensual: 480, dias_laborables: 19 },
  { id: '6', mes: 'Febrero', anio: 2026, sucursal: 'Jujuy', ppt_diarios: 24.68, avance_ppt: 469, servicios_diarios: 15.26, servicios_totales: 290, objetivo_mensual: 400, dias_laborables: 19 },
  { id: '7', mes: 'Febrero', anio: 2026, sucursal: 'Express', ppt_diarios: 7.26, avance_ppt: 138, servicios_diarios: 4.47, servicios_totales: 85, objetivo_mensual: 140, dias_laborables: 19 },
  { id: '8', mes: 'Febrero', anio: 2026, sucursal: 'Taller Movil', ppt_diarios: 4.15, avance_ppt: 54, servicios_diarios: 3.77, servicios_totales: 49, objetivo_mensual: 60, dias_laborables: 13 },
];

export const DEFAULT_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxUrEIVysJ9HgBXHOJnZ_MGPL2Huqw1b4h1zQB-SugNLB2TzTmx7CnQrPIAKKnHA/pub?gid=1177925024&single=true&output=csv";
export const QUALITY_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdwJV5wBpgzMypIn6wyrj12zwFTMc4vVf_OGvLmD1C7XOmXaZQ6bEiTHOPNIiJ7HnXi1xyLiqHjCUN/pub?gid=2126173420&single=true&output=csv";
export const SALES_QUALITY_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT9vJEHyf0B-KDjRE23N5v-RT9J41Cf0ZWOHcU1kQjUieStBRHlnHqGxY5FMCsPmoyUFgmxqw5rtKcI/pub?gid=834993134&single=true&output=csv";
export const SALES_CLAIMS_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT9vJEHyf0B-KDjRE23N5v-RT9J41Cf0ZWOHcU1kQjUieStBRHlnHqGxY5FMCsPmoyUFgmxqw5rtKcI/pub?gid=1752384200&single=true&output=csv";
export const INTERNAL_POSTVENTA_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdwJV5wBpgzMypIn6wyrj12zwFTMc4vVf_OGvLmD1C7XOmXaZQ6bEiTHOPNIiJ7HnXi1xyLiqHjCUN/pub?gid=38377431&single=true&output=csv";
export const DETAILED_QUALITY_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxpI9xx9h3KItX2g4f258YnjVsmbOO1OMmEANcfhD0AF-_OVwfCN3ZwNpUFTz-xPVZjbrQ215kkvgb/pub?gid=1326458491&single=true&output=csv";
export const DETAILED_QUALITY_SALTA_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxpI9xx9h3KItX2g4f258YnjVsmbOO1OMmEANcfhD0AF-_OVwfCN3ZwNpUFTz-xPVZjbrQ215kkvgb/pub?gid=1207525533&single=true&output=csv";
export const POSTVENTA_KPI_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxUrEIVysJ9HgBXHOJnZ_MGPL2Huqw1b4h1zQB-SugNLB2TzTmx7CnQrPIAKKnHA/pub?gid=2103759067&single=true&output=csv";
export const POSTVENTA_BILLING_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxUrEIVysJ9HgBXHOJnZ_MGPL2Huqw1b4h1zQB-SugNLB2TzTmx7CnQrPIAKKnHA/pub?gid=609635821&single=true&output=csv";
export const PCGC_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSY0PxXW3lSmnf3cCWnPbXGEF-TIVoZivSErXT0kh5az8act0uNWX7z5cZVYDNU1Q/pub?gid=1989026122&single=true&output=csv";
export const CEM_OS_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0bzWakwhsKA7hC6YrUkE9mZPXBSo5QTnw-CqFDf-KYdoGtxv_HX7rSkvHGiQJaEzVzJQal7ZuTH4i/pub?gid=1110904225&single=true&output=csv";
export const CEM_OS_SALTA_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0bzWakwhsKA7hC6YrUkE9mZPXBSo5QTnw-CqFDf-KYdoGtxv_HX7rSkvHGiQJaEzVzJQal7ZuTH4i/pub?gid=439291182&single=true&output=csv";
export const ACTION_PLAN_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIcMtyUz--H3tleWYAYh8t1mET82Be-Ml2xshs1YYamvZAr70ittX2pclTZ3WUb2RIfOldGm3N9k-C/pub?gid=848133577&single=true&output=csv";
export const ACTION_PLAN_SALES_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIcMtyUz--H3tleWYAYh8t1mET82Be-Ml2xshs1YYamvZAr70ittX2pclTZ3WUb2RIfOldGm3N9k-C/pub?gid=273788839&single=true&output=csv";

export const HR_GRADES_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2x4kZurVkW4fVtQROHlRMB7v7i2osvf2-zazRo2RmluGi_7Y0mA46sAT85t5x_vd20ctEtKjtcJa/pub?gid=208474053&single=true&output=csv";
export const HR_RELATORIO_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2x4kZurVkW4fVtQROHlRMB7v7i2osvf2-zazRo2RmluGi_7Y0mA46sAT85t5x_vd20ctEtKjtcJa/pub?gid=914584447&single=true&output=csv";

export const GEMINI_MODEL = "gemini-3-flash-preview";

export const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export const YEARS = [2024, 2025, 2026];

export const AREAS: AreaConfig[] = [
  { 
    id: 'postventa', 
    name: 'Postventa', 
    icon: 'Wrench', 
    color: 'bg-blue-600', 
    description: 'Gestión de talleres, PPT y servicios diarios.' 
  },
  { 
    id: 'rrhh', 
    name: 'RRHH', 
    icon: 'Users', 
    color: 'bg-[#001E50]', 
    description: 'Gestión de talento, capacitación y desempeño.' 
  },
  { 
    id: 'calidad', 
    name: 'Calidad', 
    icon: 'ClipboardCheck', 
    color: 'bg-green-600', 
    description: 'Auditorías, satisfacción y procesos.' 
  },
  { 
    id: 'ventas', 
    name: 'Ventas', 
    icon: 'BarChart', 
    color: 'bg-orange-500', 
    description: 'Objetivos de ventas, patentamientos y leads.' 
  }
];

export const DEFAULT_REPORT_TEMPLATE: ReportTemplate = {
  ventas: {
    enabled: true,
    modules: [
      { id: 'kpis', label: 'Indicadores Principales (CEM)', enabled: true, size: 'full' },
      { id: 'process', label: 'Adherencia a Procesos', enabled: true, size: 'half' },
      { id: 'delivery', label: 'Experiencia de Entrega', enabled: true, size: 'half' },
      { id: 'claims', label: 'Gestión de Reclamos', enabled: true, size: 'full' },
    ]
  },
  postventa: {
    enabled: true,
    modules: [
      { id: 'kpis', label: 'Indicadores LVS', enabled: true, size: 'full' },
      { id: 'resolution', label: 'Resolución de Casos', enabled: true, size: 'half' },
      { id: 'claims', label: 'Motivos de Reclamo', enabled: true, size: 'half' },
    ]
  },
  globalComments: ''
};

export const DEFAULT_CONFIG = {
  isPasswordProtected: false,
  globalPassword: 'autosol2026',
  sheetUrls: {
    postventa: DEFAULT_SHEET_URL,
    rrhh: HR_GRADES_SHEET_URL,
    calidad: QUALITY_SHEET_URL,
    ventas: '',
    detailed_quality: DETAILED_QUALITY_SHEET_URL,
    detailed_quality_salta: DETAILED_QUALITY_SALTA_SHEET_URL,
    postventa_kpis: POSTVENTA_KPI_SHEET_URL,
    postventa_billing: POSTVENTA_BILLING_SHEET_URL,
    pcgc: PCGC_SHEET_URL,
    cem_os: CEM_OS_SHEET_URL,
    cem_os_salta: CEM_OS_SALTA_SHEET_URL,
    sales_quality: SALES_QUALITY_SHEET_URL,
    sales_claims: SALES_CLAIMS_SHEET_URL,
    internal_postventa: INTERNAL_POSTVENTA_SHEET_URL,
    action_plan: ACTION_PLAN_SHEET_URL,
    action_plan_sales: ACTION_PLAN_SALES_SHEET_URL,
    hr_relatorio: HR_RELATORIO_SHEET_URL
  } as Record<AreaType, string> & { 
    detailed_quality: string; 
    detailed_quality_salta: string; 
    postventa_kpis: string; 
    postventa_billing: string; 
    pcgc: string; 
    cem_os: string;
    cem_os_salta: string;
    sales_quality: string;
    sales_claims: string;
    internal_postventa: string;
    action_plan: string;
    action_plan_sales: string;
    hr_relatorio: string;
  },
  geminiApiKey: '',
  reportTemplate: DEFAULT_REPORT_TEMPLATE
};
