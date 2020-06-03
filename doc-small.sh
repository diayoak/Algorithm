STARTTIME=$(date +%s.%n)
./convert.sh ./TestFile/doc:docx/doc-small.docx ./outputs/doc/ image
ENDTIME=$(date +%s.%n)

echo "doc-small.docx : $(($ENDTIME_DOC_SMALL - $STARTTIME_DOC_SMALL)) seconds"