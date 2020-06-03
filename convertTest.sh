STARTTIME_DOC_SMALL=$(date +%s)
./convert.sh ./TestFile/doc:docx/doc-small.docx ./outputs/doc/ image
ENDTIME_DOC_SMALL=$(date +%s)

echo "doc-small.docx : $(($ENDTIME_DOC_SMALL - $STARTTIME_DOC_SMALL)) seconds"


STARTTIME_DOC_MEDIUM=$(date +%s)
./convert.sh ./TestFile/doc:docx/doc-medium.docx ./outputs/doc/ image
ENDTIME_DOC_MEDIUM=$(date +%s)

echo "doc-medium.docx : $(($ENDTIME_DOC_MEDIUM - $STARTTIME_DOC_MEDIUM)) seconds"


STARTTIME_DOC_LARGE=$(date +%s)
./convert.sh ./TestFile/doc:docx/doc-large.docx ./outputs/doc/ image
ENDTIME_DOC_LARGE=$(date +%s)

echo "doc-large.docx : $(($ENDTIME_DOC_LARGE - $STARTTIME_DOC_LARGE)) seconds"



STARTTIME_HWP_SMALL=$(date +%s)
./convert.sh ./TestFile/hwp/hwp-small.hwp ./outputs/hwp/ image
ENDTIME_HWP_SMALL=$(date +%s)

echo "hwp-small.hwp : $(($ENDTIME_HWP_SMALL - $STARTTIME_HWP_SMALL)) seconds"


STARTTIME_HWP_MEDIUM=$(date +%s)
./convert.sh ./TestFile/hwp/hwp-medium.hwp ./outputs/hwp/ image
ENDTIME_HWP_MEDIUM=$(date +%s)

echo "hwp-medium.hwp : $(($ENDTIME_HWP_MEDIUM - $STARTTIME_HWP_MEDIUM)) seconds"


STARTTIME_HWP_LARGE=$(date +%s)
./convert.sh ./TestFile/hwp/hwp-large.hwp ./outputs/hwp/ image
ENDTIME_HWP_LARGE=$(date +%s)

echo "hwp-large.hwp : $(($ENDTIME_HWP_LARGE - $STARTTIME_HWP_LARGE)) seconds"


STARTTIME_PPT_SMALL=$(date +%s)
./convert.sh ./TestFile/ppt:pptx/ppt-small.pptx ./outputs/ppt/ image
ENDTIME_PPT_SMALL=$(date +%s)

echo "ppt-small.pptx : $(($ENDTIME_PPT_SMALL - $STARTTIME_PPT_SMALL)) seconds"


STARTTIME_PPT_MEDIUM=$(date +%s)
./convert.sh ./TestFile/ppt:pptx/ppt-medium.pptx ./outputs/ppt/ image
ENDTIME_PPT_MEDIUM=$(date +%s)

echo "ppt-medium.pptx : $(($ENDTIME_PPT_MEDIUM - $STARTTIME_PPT_MEDIUM)) seconds"


STARTTIME_PPT_LARGE=$(date +%s)
./convert.sh ./TestFile/ppt:pptx/ppt-large.pptx ./outputs/ppt/ image
ENDTIME_PPT_LARGE=$(date +%s)

echo "ppt-large.pptx : $(($ENDTIME_PPT_LARGE - $STARTTIME_PPT_LARGE)) seconds"



STARTTIME_XLSX_SMALL=$(date +%s)
./convert.sh ./TestFile/xls:xlsx/xlsx-small.xlsx ./outputs/xlsx/ image
ENDTIME_XLSX_SMALL=$(date +%s)

echo "xlsx-small.xlsx : $(($ENDTIME_XLSX_SMALL - $STARTTIME_XLSX_SMALL)) seconds"


STARTTIME_XLSX_MEDIUM=$(date +%s)
./convert.sh ./TestFile/xls:xlsx/xlsx-medium.xlsx ./outputs/xlsx/ image
ENDTIME_XLSX_MEDIUM=$(date +%s)

echo "xlsx-medium.xlsx : $(($ENDTIME_XLSX_MEDIUM - $STARTTIME_XLSX_MEDIUM)) seconds"


STARTTIME_XLSX_LARGE=$(date +%s)
./convert.sh ./TestFile/xls:xlsx/xlsx-large.xlsx ./outputs/xlsx/ image
ENDTIME_XLSX_LARGE=$(date +%s)

echo "xlsx-large.xlsx : $(($ENDTIME_XLSX_LARGE - $STARTTIME_XLSX_LARGE)) seconds"