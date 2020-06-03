START_SECOND=$(date +%s)
START_MILLISECOND=$(date +%n)
./convert.sh ./TestFile/doc:docx/doc-small.docx ./outputs/doc/ image
END_SECOND=$(date +%s)
END_MILLISECOND=$(date +%n)

echo "doc-small.docx : $(($END_SECOND - $START_SECOND)).$(($END_MILLISECOND - $START_MILLISECOND)) seconds"