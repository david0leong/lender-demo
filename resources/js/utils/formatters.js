import { format, parseISO } from 'date-fns'

export const formatDate = str => format(parseISO(str), 'PP')
