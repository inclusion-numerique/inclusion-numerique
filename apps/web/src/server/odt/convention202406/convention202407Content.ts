import { besoinSubventionLabel } from '@app/web/gouvernance/besoinSubvention'
import { MembreBeneficiaireDataForConventionPostProcessed } from '@app/web/gouvernance/getMembreBeneficiaireDataForConvention'

export const convention202407Content = ({
  beneficiaireFormation,
  budgetGlobal,
  demandesDeSubvention,
  nom,
  subventionFormation,
  subventionIngenierie,
  subventionTotal,
  dotationsIngenieries,
  dotationIngenierieGlobal,
  dotationIngenierieGlobalWords,
}: MembreBeneficiaireDataForConventionPostProcessed) => `<?xml version="1.0" encoding="UTF-8"?>
<office:document-content xmlns:officeooo="http://openoffice.org/2009/office"
  xmlns:css3t="http://www.w3.org/TR/css3-text/"
  xmlns:grddl="http://www.w3.org/2003/g/data-view#"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:formx="urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:rpt="http://openoffice.org/2005/report"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0"
  xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0"
  xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0"
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
  xmlns:oooc="http://openoffice.org/2004/calc"
  xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"
  xmlns:ooow="http://openoffice.org/2004/writer"
  xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"
  xmlns:ooo="http://openoffice.org/2004/office"
  xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0"
  xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0"
  xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0"
  xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2"
  xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0"
  xmlns:tableooo="http://openoffice.org/2009/table"
  xmlns:drawooo="http://openoffice.org/2010/draw"
  xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0"
  xmlns:dom="http://www.w3.org/2001/xml-events"
  xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:math="http://www.w3.org/1998/Math/MathML"
  xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0"
  xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0"
  xmlns:xforms="http://www.w3.org/2002/xforms" office:version="1.3">
  <office:scripts/>
  <office:font-face-decls>
    <style:font-face style:name="Arial" svg:font-family="Arial" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Arial1" svg:font-family="Arial" style:font-family-generic="swiss"/>
    <style:font-face style:name="Arial2" svg:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable"/>
    <style:font-face style:name="Arial3" svg:font-family="Arial" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Calibri" svg:font-family="Calibri" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Calibri1" svg:font-family="Calibri" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Comic Sans MS" svg:font-family="&apos;Comic Sans MS&apos;" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Courier New" svg:font-family="&apos;Courier New&apos;" style:font-family-generic="modern" style:font-pitch="fixed"/>
    <style:font-face style:name="Courier New1" svg:font-family="&apos;Courier New&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Helvetica" svg:font-family="Helvetica" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Helvetica1" svg:font-family="Helvetica" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Liberation Sans" svg:font-family="&apos;Liberation Sans&apos;" style:font-family-generic="swiss" style:font-pitch="variable"/>
    <style:font-face style:name="Lohit Devanagari" svg:font-family="&apos;Lohit Devanagari&apos;"/>
    <style:font-face style:name="Lohit Devanagari1" svg:font-family="&apos;Lohit Devanagari&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="MS Mincho" svg:font-family="&apos;MS Mincho&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Marianne" svg:font-family="Marianne" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Noto Sans CJK SC" svg:font-family="&apos;Noto Sans CJK SC&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Palatino" svg:font-family="Palatino" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Segoe UI" svg:font-family="&apos;Segoe UI&apos;" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Segoe UI1" svg:font-family="&apos;Segoe UI&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="SimSun" svg:font-family="SimSun" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Symbol" svg:font-family="Symbol" style:font-charset="x-symbol"/>
    <style:font-face style:name="Symbol1" svg:font-family="Symbol" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Times New Roman" svg:font-family="&apos;Times New Roman&apos;" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Times New Roman1" svg:font-family="&apos;Times New Roman&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Ubuntu" svg:font-family="Ubuntu" style:font-family-generic="roman" style:font-pitch="variable"/>
    <style:font-face style:name="Ubuntu1" svg:font-family="Ubuntu" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="Wingdings" svg:font-family="Wingdings" style:font-charset="x-symbol"/>
    <style:font-face style:name="Wingdings1" svg:font-family="Wingdings" style:font-family-generic="system" style:font-pitch="variable"/>
    <style:font-face style:name="font283" svg:font-family="font283" style:font-family-generic="system" style:font-pitch="variable"/>
  </office:font-face-decls>
  <office:automatic-styles>
    <style:style style:name="Table1" style:family="table">
      <style:table-properties style:width="16.482cm" fo:margin-left="0cm" fo:margin-top="0cm" fo:margin-bottom="0cm" table:align="left" style:writing-mode="lr-tb"/>
    </style:style>
    <style:style style:name="Table1.A" style:family="table-column">
      <style:table-column-properties style:column-width="10.035cm"/>
    </style:style>
    <style:style style:name="Table1.B" style:family="table-column">
      <style:table-column-properties style:column-width="6.447cm"/>
    </style:style>
    <style:style style:name="Table1.1" style:family="table-row">
      <style:table-row-properties style:min-row-height="2.302cm" fo:keep-together="auto"/>
    </style:style>
    <style:style style:name="Table1.A1" style:family="table-cell">
      <style:table-cell-properties fo:padding-left="0.191cm" fo:padding-right="0.191cm" fo:padding-top="0cm" fo:padding-bottom="0cm" fo:border="none"/>
    </style:style>
    <style:style style:name="Table1.2" style:family="table-row">
      <style:table-row-properties style:min-row-height="0.459cm" fo:keep-together="auto"/>
    </style:style>
    <style:style style:name="P1" style:family="paragraph" style:parent-style-name="Footer">
      <style:paragraph-properties fo:text-align="end" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P2" style:family="paragraph" style:parent-style-name="Footer">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P3" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P4" style:family="paragraph" style:parent-style-name="Contents_20_2">
      <style:paragraph-properties>
        <style:tab-stops>
          <style:tab-stop style:position="15.984cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3" style:font-size-complex="12pt"/>
    </style:style>
    <style:style style:name="P5" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3" style:font-size-complex="12pt"/>
    </style:style>
    <style:style style:name="P6" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P7" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P8" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="16pt" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-size-asian="16pt" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="16pt"/>
    </style:style>
    <style:style style:name="P9" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P10" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P11" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P12" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P13" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P14" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P15" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties>
        <style:tab-stops>
          <style:tab-stop style:position="4.921cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P16" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P17" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P18" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0" fo:text-indent="0.501cm" style:auto-text-indent="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P19" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.212cm" style:contextual-spacing="false" fo:line-height="100%" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P20" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P21" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P22" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:hyphenation-ladder-count="no-limit" style:vertical-align="baseline"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-name-complex="Arial3" fo:hyphenate="false" fo:hyphenation-remain-char-count="2" fo:hyphenation-push-char-count="2" loext:hyphenation-no-caps="false"/>
    </style:style>
    <style:style style:name="P23" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Times New Roman1" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P24" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0" fo:text-indent="0.501cm" style:auto-text-indent="false"/>
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P25" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P26" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false">
        <style:tab-stops>
          <style:tab-stop style:position="0.501cm"/>
          <style:tab-stop style:position="12.03cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P27" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P28" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P29" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P30" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="14pt"/>
    </style:style>
    <style:style style:name="P31" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="14pt"/>
    </style:style>
    <style:style style:name="P32" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" fo:font-weight="bold" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="14pt"/>
    </style:style>
    <style:style style:name="P33" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P34" style:family="paragraph" style:parent-style-name="Contents_20_2">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:background-color="#ffffff">
        <style:tab-stops>
          <style:tab-stop style:position="15.984cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
        </style:tab-stops>
      </style:paragraph-properties>
    </style:style>
    <style:style style:name="P35" style:family="paragraph" style:parent-style-name="Contents_20_4">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:background-color="#ffffff">
        <style:tab-stops>
          <style:tab-stop style:position="15.984cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
        </style:tab-stops>
      </style:paragraph-properties>
    </style:style>
    <style:style style:name="P36" style:family="paragraph" style:parent-style-name="Contents_20_4">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:background-color="#ffffff">
        <style:tab-stops>
          <style:tab-stop style:position="2.499cm"/>
          <style:tab-stop style:position="15.984cm" style:type="right" style:leader-style="dotted" style:leader-text="."/>
        </style:tab-stops>
      </style:paragraph-properties>
    </style:style>
    <style:style style:name="P37" style:family="paragraph" style:parent-style-name="Footnote">
      <style:paragraph-properties fo:text-align="start" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P38" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P39" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P40" style:family="paragraph" style:parent-style-name="Standard">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:background-color="#ffffff"/>
    </style:style>
    <style:style style:name="P41" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0.212cm" fo:margin-bottom="0.353cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P42" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P43" style:family="paragraph" style:parent-style-name="Text_20_body">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:margin-left="1.27cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false" fo:background-color="#ffffff"/>
    </style:style>
    <style:style style:name="P44" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="-0.005cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
    </style:style>
    <style:style style:name="P45" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:paragraph-properties fo:margin-top="0.071cm" fo:margin-bottom="0cm" style:contextual-spacing="false"/>
    </style:style>
    <style:style style:name="P46" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
    </style:style>
    <style:style style:name="P47" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
    </style:style>
    <style:style style:name="P48" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P49" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
    </style:style>
    <style:style style:name="P50" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
    </style:style>
    <style:style style:name="P51" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:orphans="0" fo:widows="0"/>
    </style:style>
    <style:style style:name="P52" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:line-height="115%" fo:text-align="justify" style:justify-single-word="false" fo:padding="0cm" fo:border="none" style:shadow="none"/>
    </style:style>
    <style:style style:name="P53" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:line-height="115%" fo:text-align="justify" style:justify-single-word="false" fo:padding="0cm" fo:border="none" style:shadow="none"/>
      <style:text-properties fo:color="#5b9bd5" loext:opacity="100%" style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P54" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
      <style:text-properties fo:color="#00000a" loext:opacity="100%" style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P55" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:language-asian="fr" style:country-asian="FR"/>
    </style:style>
    <style:style style:name="P56" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:font-size="12pt" fo:font-weight="bold" fo:background-color="#ffffff" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P57" style:family="paragraph" style:parent-style-name="docdata">
      <style:paragraph-properties fo:margin-left="1.27cm" fo:margin-right="0cm" fo:margin-top="0cm" fo:margin-bottom="0.353cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ffffff" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P58" style:family="paragraph" style:parent-style-name="docdata">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ffffff" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P59" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ffffff" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P60" style:family="paragraph" style:parent-style-name="Text_20_body">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:margin-left="2.138cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false" fo:background-color="#ffffff"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P61" style:family="paragraph" style:parent-style-name="Text_20_body">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:background-color="#ffffff"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P62" style:family="paragraph" style:parent-style-name="Text_20_body">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:margin-left="1.27cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false" fo:background-color="#ffffff"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:font-weight="bold" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-weight-asian="bold" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P63" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="-0.005cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties fo:font-size="11pt" style:font-name-asian="Arial3" style:font-size-asian="11pt" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P64" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="-0.005cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties fo:font-size="11pt" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P65" style:family="paragraph" style:parent-style-name="Frame_20_contents">
      <style:paragraph-properties fo:margin-top="0.635cm" fo:margin-bottom="0.423cm" style:contextual-spacing="false" fo:text-align="center" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P66" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:paragraph-properties fo:break-before="page"/>
      <style:text-properties style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P67" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P68" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:text-properties style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P69" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name-asian="Calibri1" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P70" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:text-properties style:font-name-asian="Calibri1" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P71" style:family="paragraph" style:parent-style-name="Heading_20_2">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties fo:font-size="14pt" style:font-size-asian="14pt" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P72" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0.751cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false"/>
    </style:style>
    <style:style style:name="P73" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0.739cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false"/>
    </style:style>
    <style:style style:name="P74" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="1.513cm" fo:margin-right="0cm" fo:text-indent="-0.762cm" style:auto-text-indent="false"/>
    </style:style>
    <style:style style:name="P75" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0.751cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
    </style:style>
    <style:style style:name="P76" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0.423cm" fo:margin-bottom="0.282cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
    </style:style>
    <style:style style:name="P77" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0.751cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0.25cm" style:auto-text-indent="false"/>
    </style:style>
    <style:style style:name="P78" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0.751cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties style:font-name-asian="Arial3"/>
    </style:style>
    <style:style style:name="P79" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="1.252cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0.25cm" style:auto-text-indent="false"/>
      <style:text-properties style:font-name-asian="Arial3"/>
    </style:style>
    <style:style style:name="P80" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0.741cm" fo:margin-right="0cm" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties style:font-name-asian="Arial3"/>
    </style:style>
    <style:style style:name="P81" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="1.513cm" fo:margin-right="0cm" fo:text-indent="-0.762cm" style:auto-text-indent="false"/>
      <style:text-properties style:font-name-asian="Arial3"/>
    </style:style>
    <style:style style:name="P82" style:family="paragraph" style:parent-style-name="Heading_20_4" style:list-style-name="">
      <style:paragraph-properties fo:margin-left="0.751cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties fo:background-color="#ff0000" style:font-name-asian="Arial3"/>
    </style:style>
    <style:style style:name="P83" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum27">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:hyphenation-ladder-count="no-limit" style:vertical-align="baseline"/>
      <style:text-properties fo:hyphenate="false" fo:hyphenation-remain-char-count="2" fo:hyphenation-push-char-count="2" loext:hyphenation-no-caps="false"/>
    </style:style>
    <style:style style:name="P84" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum27">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:hyphenation-ladder-count="no-limit" style:vertical-align="baseline"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-name-complex="Arial3" fo:hyphenate="false" fo:hyphenation-remain-char-count="2" fo:hyphenation-push-char-count="2" loext:hyphenation-no-caps="false"/>
    </style:style>
    <style:style style:name="P85" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum1">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P86" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum4">
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P87" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum26">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.282cm" style:contextual-spacing="false" fo:line-height="100%" fo:hyphenation-ladder-count="no-limit" style:vertical-align="baseline"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-complex="Arial3" fo:hyphenate="false" fo:hyphenation-remain-char-count="2" fo:hyphenation-push-char-count="2" loext:hyphenation-no-caps="false"/>
    </style:style>
    <style:style style:name="P88" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum23">
      <style:text-properties style:font-name="Arial" fo:background-color="#00ffff" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P89" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum23">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P90" style:family="paragraph" style:parent-style-name="List_20_Paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P91" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum4">
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P92" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum1">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P93" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum1">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ffffff" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P94" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum4">
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P95" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum23"/>
    <style:style style:name="P96" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum23">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P97" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum8">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0" fo:keep-with-next="always"/>
    </style:style>
    <style:style style:name="P98" style:family="paragraph" style:parent-style-name="List_20_Paragraph" style:list-style-name="WWNum23">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:background-color="#00ffff" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P99" style:family="paragraph" style:parent-style-name="Standard" style:master-page-name="First_20_Page">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false" style:page-number="1"/>
    </style:style>
    <style:style style:name="P100" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="12pt"/>
    </style:style>
    <style:style style:name="P101" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="12pt"/>
    </style:style>
    <style:style style:name="P102" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" fo:font-weight="bold" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P103" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" fo:font-weight="bold" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P104" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3" style:font-size-complex="12pt"/>
    </style:style>
    <style:style style:name="P105" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P106" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P107" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P108" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P109" style:family="paragraph" style:parent-style-name="Standard">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0" fo:background-color="#ffffff">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P110" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always">
        <style:tab-stops>
          <style:tab-stop style:position="7.982cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P111" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P112" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P113" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P114" style:family="paragraph" style:parent-style-name="Standard" style:list-style-name="WWNum3">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false">
        <style:tab-stops>
          <style:tab-stop style:position="0.501cm"/>
          <style:tab-stop style:position="12.03cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P115" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false">
        <style:tab-stops>
          <style:tab-stop style:position="0.501cm"/>
          <style:tab-stop style:position="12.03cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P116" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P117" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0.212cm" fo:margin-bottom="0.282cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3" style:font-weight-complex="bold"/>
    </style:style>
    <style:style style:name="P118" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3" style:font-weight-complex="bold"/>
    </style:style>
    <style:style style:name="P119" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties>
        <style:tab-stops>
          <style:tab-stop style:position="6.421cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P120" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ffff00" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P121" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ffff00" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P122" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P123" style:family="paragraph" style:parent-style-name="Standard">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:background-color="#ffffff"/>
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P124" style:family="paragraph" style:parent-style-name="Standard" style:list-style-name="WWNum27">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="true" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:hyphenation-ladder-count="no-limit" style:vertical-align="baseline"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-name-complex="Arial3" fo:hyphenate="false" fo:hyphenation-remain-char-count="2" fo:hyphenation-push-char-count="2" loext:hyphenation-no-caps="false"/>
    </style:style>
    <style:style style:name="P125" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P126" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P127" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P128" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P129" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0" fo:text-indent="0.501cm" style:auto-text-indent="false"/>
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P130" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P131" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P132" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="14pt"/>
    </style:style>
    <style:style style:name="P133" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" fo:font-weight="bold" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-weight-asian="bold" style:font-name-complex="Arial3" style:font-size-complex="14pt"/>
    </style:style>
    <style:style style:name="P134" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P135" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="center" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="14pt" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color" fo:background-color="#ff0000" style:font-name-asian="Arial3" style:font-size-asian="14pt" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P136" style:family="paragraph" style:parent-style-name="Standard">
      <style:text-properties style:font-name="Arial" fo:font-style="italic" fo:background-color="#ff0000" style:font-style-asian="italic" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P137" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:background-color="#ffffff" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P138" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false">
        <style:tab-stops>
          <style:tab-stop style:position="2cm"/>
        </style:tab-stops>
      </style:paragraph-properties>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P139" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:font-size="12pt" fo:font-weight="bold" fo:background-color="#ffffff" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P140" style:family="paragraph" style:parent-style-name="Standard">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:line-height="100%" fo:text-align="justify" style:justify-single-word="false" fo:orphans="0" fo:widows="0"/>
      <style:text-properties fo:color="#00000a" loext:opacity="100%" style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="P141" style:family="paragraph" style:parent-style-name="Text_20_body" style:list-style-name="WWNum30">
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P142" style:family="paragraph" style:parent-style-name="Text_20_body" style:list-style-name="WWNum30">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:background-color="#ffffff"/>
    </style:style>
    <style:style style:name="P143" style:family="paragraph" style:parent-style-name="Text_20_body" style:list-style-name="WWNum23">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:background-color="#ffffff"/>
    </style:style>
    <style:style style:name="P144" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:margin-left="1.27cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ffffff" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P145" style:family="paragraph" style:parent-style-name="Text_20_body" style:list-style-name="WWNum23">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:text-align="justify" style:justify-single-word="false" fo:background-color="#ffffff"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P146" style:family="paragraph" style:parent-style-name="Text_20_body" style:list-style-name="WWNum23">
      <style:paragraph-properties fo:margin-left="1.27cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="-0.63cm" style:auto-text-indent="false"/>
      <style:text-properties fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P147" style:family="paragraph" style:parent-style-name="Text_20_body" style:list-style-name="WWNum23">
      <style:paragraph-properties fo:margin-left="2.54cm" fo:margin-right="0cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="-0.63cm" style:auto-text-indent="false"/>
      <style:text-properties fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P148" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="-0.005cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties fo:font-size="11pt" style:font-name-asian="Arial3" style:font-size-asian="11pt" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P149" style:family="paragraph" style:parent-style-name="Text_20_body">
      <style:paragraph-properties fo:margin-left="0cm" fo:margin-right="-0.005cm" fo:text-align="justify" style:justify-single-word="false" fo:text-indent="0cm" style:auto-text-indent="false"/>
      <style:text-properties fo:font-size="11pt" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P150" style:family="paragraph" style:parent-style-name="docdata">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.212cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ffffff" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P151" style:family="paragraph" style:parent-style-name="docdata">
      <style:paragraph-properties fo:margin-top="0.494cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P152" style:family="paragraph" style:parent-style-name="docdata">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ff0000" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P153" style:family="paragraph" style:parent-style-name="docdata" style:list-style-name="WWNum29">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
    </style:style>
    <style:style style:name="P154" style:family="paragraph" style:parent-style-name="docdata" style:list-style-name="WWNum29">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ffffff" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P155" style:family="paragraph" style:parent-style-name="docdata" style:list-style-name="WWNum29">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.353cm" style:contextual-spacing="false" fo:text-align="justify" style:justify-single-word="false"/>
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ffffff" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="P156" style:family="paragraph">
      <loext:graphic-properties draw:fill="solid" draw:fill-color="#ffffff"/>
      <style:paragraph-properties fo:text-align="start"/>
      <style:text-properties fo:font-size="18pt"/>
    </style:style>
    <style:style style:name="T1" style:family="text">
      <style:text-properties style:font-name="Arial" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T2" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#00ffff" loext:char-shading-value="0" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T3" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T4" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T5" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T6" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ffff00" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T7" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ffff00" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T8" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3" style:font-size-complex="12pt"/>
    </style:style>
    <style:style style:name="T9" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-size="12pt" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-size-asian="12pt" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3" style:font-size-complex="12pt"/>
    </style:style>
    <style:style style:name="T10" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T11" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" style:font-name-asian="Arial3" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T12" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" fo:background-color="#ffff00" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T13" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T14" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T15" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-weight="bold" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-weight-asian="bold" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T16" style:family="text">
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR"/>
    </style:style>
    <style:style style:name="T17" style:family="text">
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T18" style:family="text">
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T19" style:family="text">
      <style:text-properties style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3" style:font-weight-complex="bold"/>
    </style:style>
    <style:style style:name="T20" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T21" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T22" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T23" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T24" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T25" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T26" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#0000ff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T27" style:family="text">
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T28" style:family="text">
      <style:text-properties style:font-name="Arial" style:font-name-complex="Arial3" text:display="true"/>
    </style:style>
    <style:style style:name="T29" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-size="9pt" style:font-size-asian="9pt" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T30" style:family="text">
      <style:text-properties style:font-name="Arial" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T31" style:family="text">
      <style:text-properties style:font-name="Arial" fo:background-color="#00ff00" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T32" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-style="italic" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-style-asian="italic" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T33" style:family="text">
      <style:text-properties style:font-name="Arial" fo:font-size="11pt" style:font-name-asian="Arial3" style:font-size-asian="11pt" style:font-name-complex="Arial3" style:font-size-complex="11pt" style:font-weight-complex="bold"/>
    </style:style>
    <style:style style:name="T34" style:family="text">
      <style:text-properties style:font-name="Helvetica" fo:font-size="16pt" fo:font-weight="bold" style:font-size-asian="16pt" style:font-weight-asian="bold" style:font-name-complex="Helvetica1"/>
    </style:style>
    <style:style style:name="T35" style:family="text">
      <style:text-properties style:text-position="super 58%" style:font-name="Arial" style:font-name-asian="Arial3" style:language-asian="fr" style:country-asian="FR" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T36" style:family="text">
      <style:text-properties style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T37" style:family="text">
      <style:text-properties style:font-name-asian="Arial3"/>
    </style:style>
    <style:style style:name="T38" style:family="text">
      <style:text-properties fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Arial3"/>
    </style:style>
    <style:style style:name="T39" style:family="text">
      <style:text-properties fo:font-weight="bold" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-weight-asian="bold"/>
    </style:style>
    <style:style style:name="T40" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T41" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T42" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" style:font-name="Arial" fo:font-size="11pt" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-name-complex="Arial3" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T43" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:background-color="#ff0000" loext:char-shading-value="0"/>
    </style:style>
    <style:style style:name="T44" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T45" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T46" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T47" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-size-asian="11pt" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T48" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:font-weight="bold" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-weight-asian="bold" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T49" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:font-weight="bold" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-weight-asian="bold" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T50" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:font-weight="bold" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Arial3" style:font-size-asian="11pt" style:font-weight-asian="bold" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T51" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-size="11pt" fo:background-color="#7030a0" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T52" style:family="text">
      <style:text-properties fo:color="#000000" loext:opacity="100%" fo:font-weight="bold" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-weight-asian="bold"/>
    </style:style>
    <style:style style:name="T53" style:family="text">
      <style:text-properties fo:color="#5b9bd5" loext:opacity="100%" style:font-name="Arial" style:font-name-asian="Arial3" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T54" style:family="text">
      <style:text-properties fo:font-size="11pt" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T55" style:family="text">
      <style:text-properties fo:font-size="11pt" style:font-name-asian="Arial3" style:font-size-asian="11pt" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T56" style:family="text">
      <style:text-properties fo:font-size="11pt" fo:background-color="#ffffff" loext:char-shading-value="0" style:font-name-asian="Calibri1" style:font-size-asian="11pt" style:language-asian="en" style:country-asian="US" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T57" style:family="text">
      <style:text-properties fo:font-size="11pt" fo:font-style="italic" style:font-name-asian="Arial3" style:font-size-asian="11pt" style:font-style-asian="italic" style:font-size-complex="11pt"/>
    </style:style>
    <style:style style:name="T58" style:family="text">
      <style:text-properties style:font-name-asian="Calibri1" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T59" style:family="text">
      <style:text-properties fo:color="#161616" loext:opacity="100%" style:font-name="Arial" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-complex="Arial3"/>
    </style:style>
    <style:style style:name="T60" style:family="text">
      <style:text-properties fo:font-weight="normal" style:font-name-asian="Arial3" style:language-asian="en" style:country-asian="US" style:font-weight-asian="normal"/>
    </style:style>
    <style:style style:name="T61" style:family="text">
      <style:text-properties fo:font-weight="normal" fo:background-color="#00ffff" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="en" style:country-asian="US" style:font-weight-asian="normal"/>
    </style:style>
    <style:style style:name="T62" style:family="text">
      <style:text-properties fo:font-weight="normal" fo:background-color="#ff0000" loext:char-shading-value="0" style:font-name-asian="Arial3" style:language-asian="en" style:country-asian="US" style:font-weight-asian="normal"/>
    </style:style>
    <style:style style:name="fr1" style:family="graphic" style:parent-style-name="Graphics">
      <style:graphic-properties fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0cm" fo:margin-bottom="0cm" style:vertical-pos="top" style:vertical-rel="baseline" fo:background-color="transparent" draw:fill="none" draw:fill-color="#ffffff" fo:padding="0cm" fo:border="none" style:mirror="none" fo:clip="rect(0cm, 0cm, 0cm, 0cm)" draw:luminance="0%" draw:contrast="0%" draw:red="0%" draw:green="0%" draw:blue="0%" draw:gamma="100%" draw:color-inversion="false" draw:image-opacity="100%" draw:color-mode="standard"/>
    </style:style>
    <style:style style:name="Sect1" style:family="section">
      <style:section-properties style:editable="false">
        <style:columns fo:column-count="1" fo:column-gap="0cm"/>
      </style:section-properties>
    </style:style>
    <style:style style:name="gr1" style:family="graphic" style:parent-style-name="Frame">
      <style:graphic-properties draw:stroke="solid" svg:stroke-width="0.035cm" svg:stroke-color="#000000" draw:stroke-linejoin="miter" draw:fill="solid" draw:fill-color="#ffffff" draw:textarea-vertical-align="top" draw:auto-grow-height="false" fo:min-height="1.838cm" fo:min-width="10.077cm" fo:padding-top="0.127cm" fo:padding-bottom="0.127cm" fo:padding-left="0.254cm" fo:padding-right="0.254cm" fo:wrap-option="wrap" fo:margin-left="0.3cm" fo:margin-right="0.353cm" fo:margin-top="0.108cm" fo:margin-bottom="0.191cm" style:run-through="foreground" style:wrap="parallel" style:number-wrapped-paragraphs="no-limit" style:wrap-contour="false" style:vertical-pos="from-top" style:vertical-rel="paragraph" style:horizontal-pos="from-left" style:horizontal-rel="paragraph" draw:wrap-influence-on-position="once-concurrent" loext:allow-overlap="true" style:flow-with-text="false"/>
    </style:style>
  </office:automatic-styles>
  <office:body>
    <office:text text:use-soft-page-breaks="true">
      <text:sequence-decls>
        <text:sequence-decl text:display-outline-level="0" text:name="Illustration"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Table"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Text"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Drawing"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Figure"/>
      </text:sequence-decls>
      <text:p text:style-name="P99">
        <draw:frame draw:style-name="fr1" draw:name="Image 2" text:anchor-type="as-char" svg:width="11.084cm" svg:height="3.487cm" draw:z-index="0">
          <draw:image xlink:href="Pictures/10000001000005DC000001D840A5A38F9EC128D2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad" draw:mime-type="image/png"/>
        </draw:frame>
      </text:p>
      <text:p text:style-name="P6"/>
      <text:p text:style-name="P6"/>
      <text:p text:style-name="P8">
        <draw:custom-shape text:anchor-type="char" draw:z-index="1" draw:name="Zone de texte 2" draw:style-name="gr1" draw:text-style-name="P156" svg:width="10.584cm" svg:height="2.091cm" svg:x="2.457cm" svg:y="0.293cm">
          <text:p text:style-name="P65">
            <text:span text:style-name="T34">Convention de subventionnement</text:span>
          </text:p>
          <draw:enhanced-geometry draw:mirror-horizontal="false" draw:mirror-vertical="false" svg:viewBox="0 0 0 0" draw:text-areas="0 0 ?f3 ?f2" draw:type="ooxml-rect" draw:enhanced-path="M 0 0 L ?f3 0 ?f3 ?f2 0 ?f2 Z N">
            <draw:equation draw:name="f0" draw:formula="logwidth/2"/>
            <draw:equation draw:name="f1" draw:formula="logheight/2"/>
            <draw:equation draw:name="f2" draw:formula="logheight"/>
            <draw:equation draw:name="f3" draw:formula="logwidth"/>
          </draw:enhanced-geometry>
        </draw:custom-shape>
      </text:p>
      <text:p text:style-name="P8"/>
      <text:p text:style-name="P8"/>
      <text:p text:style-name="P8"/>
      <text:p text:style-name="P8"/>
      <text:p text:style-name="P100">Entre</text:p>
      <text:p text:style-name="P39">
        <text:span text:style-name="T8">
          <text:line-break/>
        </text:span>
        <text:span text:style-name="T10">L’Agence Nationale de la Cohésion des Territoires</text:span>
        <text:span text:style-name="T17">, « </text:span>
        <text:span text:style-name="T10">ANCT</text:span>
        <text:span text:style-name="T17"> », </text:span>
        <text:bookmark-start text:name="_Hlk117601944"/>
        <text:span text:style-name="T17">établissement public de l’État immatriculé sous le numéro SIREN 130 026 032 dont le siège est 20 avenue de Ségur – TSA 10717 – 75334 PARIS CEDEX 07, représenté par Monsieur Stanislas BOURRON Directeur Général de ladite Agence, nommé à ces fonctions par décret du Président de la République en date du 1</text:span>
        <text:span text:style-name="T35">er</text:span>
        <text:span text:style-name="T17"> décembre 2022 et domicilié en cette qualité audit siège</text:span>
        <text:bookmark-end text:name="_Hlk117601944"/>
      </text:p>
      <text:p text:style-name="P41">
        <text:span text:style-name="T17">Ci-après dénommée « </text:span>
        <text:span text:style-name="T10">l’ANCT</text:span>
        <text:span text:style-name="T17"> »,</text:span>
      </text:p>
      <text:p text:style-name="P5"/>
      <text:p text:style-name="P100">Et</text:p>
      <text:p text:style-name="P40">
        <text:span text:style-name="T17">${nom}, </text:span>
        <text:span text:style-name="T12">Détail statut</text:span>
        <text:span text:style-name="T10"></text:span>
        <text:span text:style-name="T17">(association de loi de 1901, coopérative, autre…), situé(e)</text:span>
        <text:span text:style-name="T10"></text:span>
        <text:span text:style-name="T12">Adresse</text:span>
        <text:span text:style-name="T6">,</text:span>
        <text:span text:style-name="T17"> représenté(e) par </text:span>
        <text:span text:style-name="T12">Nom du référent, fonction du référent</text:span>
        <text:span text:style-name="T10">.</text:span>
      </text:p>
      <text:p text:style-name="P5"/>
      <text:p text:style-name="Standard">
        <text:span text:style-name="T8">Ci-après dénommé(e) </text:span>
        <text:span text:style-name="T9">« le Bénéficiaire »,</text:span>
      </text:p>
      <text:p text:style-name="P5"/>
      <text:p text:style-name="P5">L’ANCT et le bénéficiaire sont ci-après désignés ensemble « les Parties »,</text:p>
      <text:p text:style-name="P5"/>
      <text:p text:style-name="P5">Il a été convenu ce qui suit :</text:p>
      <text:p text:style-name="P5"/>
      <text:p text:style-name="P4"/>
      <text:table-of-content text:style-name="Sect1" text:protected="true" text:name="Table of Contents1">
        <text:table-of-content-source text:outline-level="4" text:use-index-marks="false">
          <text:index-title-template text:style-name="Contents_20_Heading"/>
          <text:table-of-content-entry-template text:outline-level="1" text:style-name="Contents_20_1">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="2" text:style-name="Contents_20_2">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="3" text:style-name="Contents_20_3">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="4" text:style-name="Contents_20_4">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="5" text:style-name="Contents_20_5">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="6" text:style-name="Contents_20_6">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="7" text:style-name="Contents_20_7">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="8" text:style-name="Contents_20_8">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="9" text:style-name="Contents_20_9">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
          <text:table-of-content-entry-template text:outline-level="10" text:style-name="Contents_20_10">
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-link-start text:style-name="Index_20_Link"/>
            <text:index-entry-chapter/>
            <text:index-entry-text/>
            <text:index-entry-tab-stop style:type="right" style:leader-char="."/>
            <text:index-entry-page-number/>
            <text:index-entry-link-end/>
            <text:index-entry-link-end/>
          </text:table-of-content-entry-template>
        </text:table-of-content-source>
        <text:index-body>
          <text:p text:style-name="P34">
            <text:soft-page-break/>
            <text:a xlink:type="simple" xlink:href="#_Toc162530243" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Préambule</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530243" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530244" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 1 : Objet de la convention</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530244" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530245" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 2 : Description du projet de la gouvernance</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530245" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530246" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 2.1 : Contexte des actions et demande de subvention</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530246" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530247" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 2.2 : Description de la ou des action(s) subventionnée(s)</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530247" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530248" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 3 : Durée de la convention</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530248" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530249" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 4 : Modalités du financement</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530249" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P36">
            <text:a xlink:type="simple" xlink:href="#_Toc162530250" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">4.1.</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530250" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T17">
                <text:tab/>
              </text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530250" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Montant de la participation financière</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530250" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          ${
            subventionIngenierie.toNumber()
              ? `
            <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530251" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">4. 1. 1. Ingénierie de projet</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530251" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
              </text:span>
            </text:a>
          </text:p>
            `
              : ''
          }
          ${
            beneficiaireFormation
              ? `
            <text:p text:style-name="P35">
              <text:a xlink:type="simple" xlink:href="#_Toc162530252" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
                <text:span text:style-name="T27">4. 1. 2. Formations aidants numériques / Aidants Connect</text:span>
              </text:a>
              <text:a xlink:type="simple" xlink:href="#_Toc162530252" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
                <text:span text:style-name="T28">
                  <text:tab/>
                </text:span>
              </text:a>
            </text:p>
            `
              : ''
          }
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530253" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 5 : Suivi de la réalisation du projet du bénéficiaire et son évaluation</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530253" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530254" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">5.1. Suivi et animation collective</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530254" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          ${
            subventionIngenierie.toNumber()
              ? `
            <text:p text:style-name="P35">
              <text:a xlink:type="simple" xlink:href="#_Toc162530255" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
                <text:span text:style-name="T27">5. 1. 1. Projets d’ingénierie</text:span>
              </text:a>
              <text:a xlink:type="simple" xlink:href="#_Toc162530255" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
                <text:span text:style-name="T28">
                  <text:tab/>
                </text:span>
              </text:a>
            </text:p>
            `
              : ''
          }
          ${
            beneficiaireFormation
              ? `
            <text:p text:style-name="P35">
              <text:a xlink:type="simple" xlink:href="#_Toc162530256" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
                <text:span text:style-name="T27">5. 1. 2. Formations aidants numériques / Aidants connect</text:span>
              </text:a>
              <text:a xlink:type="simple" xlink:href="#_Toc162530256" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
                <text:span text:style-name="T28">
                  <text:tab/>
                </text:span>
              </text:a>
            </text:p>
            `
              : ''
          }
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530257" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">5.2. Evaluation de la dépense des fonds</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530257" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530258" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 6 : Communication et propriété intellectuelle</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530258" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530259" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 7 : Respect du Contrat d’engagement républicain par les associations et les fondations</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530259" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530260" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 8 : Résiliation</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530260" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530261" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">8.1. <text:s/>
Résiliation pour faute</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530261" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530262" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">8.2. <text:s/>
Effets de la résiliation</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530262" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530263" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 9 : Force majeure</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530263" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530264" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 10 : Dispositions générales</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530264" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530265" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">10.1. Modification de la convention</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530265" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530266" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">10.2. Nullité</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530266" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530267" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">10.3. <text:s/>
Renonciation</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530267" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530268" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">10.4. Cession et transmission de la convention</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530268" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530269" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">10.5. Publication des données</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530269" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P35">
            <text:a xlink:type="simple" xlink:href="#_Toc162530270" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">10.6. Données personnelles</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530270" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530271" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 11 : Conflit d&apos;intérêts</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530271" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530272" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Article 12 : Litiges</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530272" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
          <text:p text:style-name="P34">
            <text:a xlink:type="simple" xlink:href="#_Toc162530273" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T27">Annexes</text:span>
            </text:a>
            <text:a xlink:type="simple" xlink:href="#_Toc162530273" text:style-name="Index_20_Link" text:visited-style-name="Index_20_Link">
              <text:span text:style-name="T28">
                <text:tab/>
</text:span>
            </text:a>
          </text:p>
        </text:index-body>
      </text:table-of-content>
      <text:h text:style-name="P66" text:outline-level="2">
        <text:bookmark-start text:name="_Toc162530243"/>
Préambule<text:bookmark-end text:name="_Toc162530243"/>
      </text:h>
      <text:p text:style-name="P14">L’Agence nationale de la cohésion des territoires (ANCT) conseille et soutien les collectivités territoriales et leurs groupements dans la conception, la définition et la mise en œuvre de leurs projets. En application de l’article L. 1231-2-V du Code général des collectivités territoriales, dans le domaine du numérique, l&apos;Agence a pour mission d&apos;impulser, d&apos;aider à concevoir et d&apos;accompagner les projets et les initiatives portés par l&apos;État, les collectivités territoriales et leurs groupements, les réseaux d&apos;entreprises et les associations. A ce titre, l&apos;ANCT favorise l&apos;accès de l&apos;ensemble de la population aux outils numériques et le développement des usages et des services numériques dans les territoires.</text:p>
      <text:p text:style-name="P120">[PRESENTATION DU CO CONTRACTANT]</text:p>
      <text:p text:style-name="P9"/>
      <text:p text:style-name="P101">Contexte</text:p>
      <text:p text:style-name="P39">
        <text:span text:style-name="T17">Cinq ans après le lancement de la première Stratégie nationale pour un numérique inclusif (SNNI) et à l’issue d’une vaste concertation partenariale menée dans le cadre du Conseil National de la Refondation numérique (CNR numérique), l’État, les collectivités territoriales et les acteurs de la société civile ont souhaité réaffirmer leur engagement en faveur de l’inclusion numérique du plus grand nombre. Prenant la suite de la SNNI, </text:span>
        <text:span text:style-name="T10">la feuille de route France Numérique Ensemble (FNE) est structurée autour de 4 axes et 16 engagements</text:span>
        <text:span text:style-name="T10">
          <text:note text:id="ftn1" text:note-class="footnote">
            <text:note-citation>1</text:note-citation>
            <text:note-body>
              <text:p text:style-name="P37">
                <text:span text:style-name="T27">
                  <text:s/>
                </text:span>
                <text:span text:style-name="T29">La feuille de route France Numérique Ensemble est disponible sur le site du Programme Société Numérique. Lien : </text:span>
                <text:a xlink:type="simple" xlink:href="https://societenumerique.gouv.fr/documents/84/Feuille_route_23-27_-_engagements_mis_à_jour.pdf" office:target-frame-name="https://societenumerique.gouv.fr/documents/84/Feuille_route_23-27_-_engagements_mis_%C3%A0_jour.pdf" xlink:show="replace" text:style-name="Internet_20_link" text:visited-style-name="Visited_20_Internet_20_Link">
                  <text:span text:style-name="Internet_20_link">
                    <text:span text:style-name="T29">https://societenumerique.gouv.fr/documents/84/Feuille_route_23-27_-_engagements_mis_%C3%A0_jour.pdf</text:span>
                  </text:span>
                </text:a>
                <text:span text:style-name="T29">. </text:span>
              </text:p>
            </text:note-body>
          </text:note>
        </text:span>
        <text:span text:style-name="T17">. Elle doit permettre, d’ici à 2027, d’atteindre les objectifs suivants : 8 millions de personnes accompagnées, 25 000 lieux d’inclusion numérique, 20 000 aidants numériques formés et 2 millions d’équipements informatiques reconditionnés accessibles aux ménages les plus modestes, en complément des objectifs fixés dans le cadre de la politique prioritaire du Gouvernement « Devenir la première puissance numérique européenne » et de son chantier « Favoriser l’inclusion numérique pour tous par la formation et les conseillers numériques ».</text:span>
      </text:p>
      <text:p text:style-name="P39">
        <text:span text:style-name="T18">Le Programme Société Numérique de l’ANCT, chargé de mettre en œuvre cette feuille de route France Numérique Ensemble, entend ainsi mener des actions pour</text:span>
        <text:span text:style-name="T11"></text:span>
        <text:span text:style-name="T18">renforcer les acteurs territoriaux de la politique d’inclusion numérique. L’Instruction du Gouvernement relative à la territorialisation de la feuille de route France Numérique Ensemble signée le 28/07/2023 détaille le calendrier qui permet la territorialisation de la politique publique d’inclusion numérique. Ainsi, dans 80 départements, au moins une collectivité s’est déclarée volontaire pour co-porter une gouvernance locale auprès de l’État. Cette gouvernance locale est constituée des différents acteurs concernés par l’inclusion numérique.</text:span>
      </text:p>
      <text:p text:style-name="P52">
        <text:span text:style-name="T18">Afin de renforcer leur rôle dans le cadre de FNE et pérenniser l’action de la médiation numérique, une enveloppe budgétaire est dédiée aux gouvernances locales </text:span>
        ${
          subventionIngenierie.toNumber()
            ? `
          <text:span text:style-name="T18">pour financer des projets d&apos;élaboration ou de mise en œuvre de feuilles de route territoriales</text:span>
          `
            : ''
        }
        ${subventionIngenierie.toNumber() && beneficiaireFormation ? ` et ` : ''}
        ${
          beneficiaireFormation
            ? `
          <text:span text:style-name="T18">financer </text:span>
          <text:span text:style-name="T18">des formations aidants numériques/Aidants Connect à destination d’aidants et de médiateurs numérique n’étant ni conseillers numériques, ni salariés de structures adhérentes à l’OPCO Uniformation</text:span>
          <text:span text:style-name="T18">
            <text:note text:id="ftn2" text:note-class="footnote">
              <text:note-citation>2</text:note-citation>
              <text:note-body>
                <text:p text:style-name="Footnote">
                  <text:span text:style-name="T29">
                    <text:s/>
  La formation des conseillers numériques et des structures adhérentes à l’OPCO Uniformation sont déjà financées par ailleurs.</text:span>
                </text:p>
              </text:note-body>
            </text:note>
          </text:span>
          `
            : ''
        }
        <text:span text:style-name="T18">.</text:span>
      </text:p>
      <text:p text:style-name="P52">
        <text:span text:style-name="T18">Le montant de cette enveloppe varie selon le département, étant indexé sur 5 critères : le taux de chômage, le taux de pauvreté, la part des habitants peu ou pas diplômés, la </text:span>
        <text:soft-page-break/>
        <text:span text:style-name="T18">démographie, et la part des +65 ans. Le montant exact auquel chaque gouvernance locale peut prétendre a été communiqué aux départements et aux régions en mars 2024</text:span>
        <text:span text:style-name="T53"></text:span>
        <text:span text:style-name="T18">et est encadré par la présente convention. </text:span>
      </text:p>
      <text:p text:style-name="P123">Pour bénéficier de ce dispositif, le bénéficiaire a eu connaissance du cahier des charges via cet espace France Numérique Ensemble (annexes 1 et 2 à la présente convention).</text:p>
      <text:p text:style-name="P53"/>
      <text:h text:style-name="P67" text:outline-level="2">
        <text:bookmark-start text:name="_Toc162530244"/>
Article 1 : Objet de la convention<text:bookmark-end text:name="_Toc162530244"/>
      </text:h>
      <text:p text:style-name="P42">
        <text:span text:style-name="T44">L’objet de la présente convention est l&apos;octroi par l’ANCT d&apos;une subvention à hauteur de </text:span>
        <text:span text:style-name="T44">${subventionTotal.toString()} euros </text:span>
        <text:span text:style-name="T44">destinée au bénéficiaire pour :</text:span>
      </text:p>
      <text:p text:style-name="P59"/>
      ${
        subventionIngenierie.toNumber()
          ? `
        <text:list xml:id="list3316890603" text:style-name="WWNum30">
          <text:list-item>
            <text:p text:style-name="P141">
              <text:span text:style-name="T48">Soutenir son projet d’élaboration et/ou de mise en œuvre de la feuille de route France Numérique Ensemble au niveau du territoire </text:span>
              <text:span text:style-name="T44">(désigné dans la convention par l’expression « ingénierie de projet »). </text:span>
            </text:p>
          </text:list-item>
        </text:list>
        <text:p text:style-name="P144">Peuvent ainsi être financés les actions suivantes : </text:p>
        <text:p text:style-name="P59"/>
        <text:list xml:id="list1555771453" text:style-name="WWNum23">
          <text:list-item>
            <text:p text:style-name="P146">Formalisation des feuilles de route :</text:p>
            <text:list>
              <text:list-item>
                <text:p text:style-name="P147">Établir un diagnostic territorial </text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P147">Co-construire la feuille de route avec les acteurs du territoire </text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P147">Rédiger la feuille de route</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P147">Appui juridique dédié à la gouvernance</text:p>
              </text:list-item>
            </text:list>
          </text:list-item>
          <text:list-item>
            <text:p text:style-name="P146">Financement du déploiement de la / des feuilles de route :</text:p>
            <text:list>
              <text:list-item>
                <text:p text:style-name="P147">Structurer un fonds local pour l’inclusion numérique</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P147">Monter des dossiers de subvention complexes (ex : FSE)</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P147">Animer et mettre en œuvre la gouvernance et la feuille de route </text:p>
              </text:list-item>
            </text:list>
          </text:list-item>
          <text:list-item>
            <text:p text:style-name="P146">Outillage des acteurs de votre territoire :</text:p>
            <text:list>
              <text:list-item>
                <text:p text:style-name="P147">Structurer une filière de reconditionnement locale</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P147">Collecter des données territoriales pour alimenter un hub national de données relatives à l&apos;inclusion numérique</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P147">Sensibiliser les acteurs de l’inclusion numérique aux outils existants (PIX, La Base…)</text:p>
              </text:list-item>
            </text:list>
          </text:list-item>
        </text:list>
        `
          : ''
      }
      <text:p text:style-name="P61"/>
      ${
        beneficiaireFormation
          ? `
        <text:list xml:id="list143016059640356" text:continue-list="list3316890603" text:style-name="WWNum30">
          <text:list-item>
            <text:p text:style-name="P141">
              <text:span text:style-name="T48">Permettre le financement d’au moins 60 départs en formations </text:span>
              <text:span text:style-name="T48">sur les enjeux d’inclusion et de médiation numériques, avec ou sans brique Aidants Connect.</text:span>
            </text:p>
          </text:list-item>
        </text:list>
        <text:p text:style-name="P62"/>
        <text:p text:style-name="P144">
          <text:span text:style-name="T48">Ces formations doivent être à destination des </text:span>
          <text:span text:style-name="T48">professionnels du territoire</text:span>
          <text:span text:style-name="T48">, y compris des professionnels n’appartenant pas à la structure du bénéficiaire</text:span>
          <text:span text:style-name="T44">, et</text:span>
          <text:span text:style-name="T44"></text:span>
          <text:span text:style-name="T44">prioritairement des agents de collectivités locales et de l’Etat (conseillers France Services, agents de Préfecture, secrétaires de mairie, travailleurs sociaux, agents d’accueil, médiateurs numériques…), réalisant des actions en faveur de l’inclusion numérique et de l’appropriation du numérique par les publics.</text:span>
        </text:p>
        <text:p text:style-name="P62"/>
        <text:p text:style-name="P144">
          <text:span text:style-name="T48">En revanche, ces professionnels ne doivent être </text:span>
          <text:span text:style-name="T48">ni conseillers numériques, ni salariés de structures adhérentes à l’OPCO Uniformation</text:span>
          <text:span text:style-name="T48">.</text:span>
        </text:p>
        <text:p text:style-name="P61"/>
        <text:list xml:id="list548792172" text:style-name="WWNum27">
          <text:list-item>
            <text:p text:style-name="P144">Trois types de formations peuvent être financées dans ce cadre :</text:p>
            <text:list>
              <text:list-item>
                <text:p>Formation aidant numérique (sur les enjeux de l’inclusion numérique des personnes les plus fragiles)</text:p>
              </text:list-item>
              <text:list-item>
                <text:p>Formation aidant numérique avec brique Aidants Connect (pour les professionnels réalisant de l’accompagnement aux démarches administratives)</text:p>
              </text:list-item>
              <text:list-item>
                <text:p>
                  <text:soft-page-break/>
  Formation Aidants Connect </text:p>
              </text:list-item>
            </text:list>
          </text:list-item>
        </text:list>
        <text:p text:style-name="P22"/>
        <text:list xml:id="list143015821524439" text:continue-numbering="true" text:style-name="WWNum27">
          <text:list-item>
            <text:p text:style-name="P144">Les organismes de formation auprès desquels les professionnels seront formés devront être certifiés QUALIOPI.</text:p>
          </text:list-item>
        </text:list>
        <text:p text:style-name="P22"/>
        <text:list xml:id="list143017800871598" text:continue-numbering="true" text:style-name="WWNum27">
          <text:list-item>
            <text:p text:style-name="P144">
              <text:span text:style-name="T44">Les formations avec Aidants Connect pourront être suivies par les professionnels pour qui l’outil est particulièrement adapté (accompagnement sur les démarches administratives, accompagnements récurrents sur ces démarches…). Ce </text:span>
              <text:a xlink:type="simple" xlink:href="https://aidantsconnect.beta.gouv.fr/static/guides_aidants_connect/AC_Depliant4P_2024.pdf" text:style-name="Standard" text:visited-style-name="Standard">
                <text:span text:style-name="T44">document</text:span>
              </text:a>
              <text:span text:style-name="T44"> permet de mieux connaitre les avantages à être habilités Aidants Connect. Pour habiliter de nouveaux professionnels à Aidants Connect, il est souhaitable de privilégier le volontariat des professionnels à partir d’un temps d’information sur le dispositif, afin de favoriser une utilisation effective du service. L’équipe d’Aidants Connect pourra être mobilisée en ce sens.</text:span>
            </text:p>
          </text:list-item>
        </text:list>`
          : ''
      }
      <text:p text:style-name="P60"/>
      <text:p text:style-name="P59"/>
      <text:p text:style-name="P9"/>
      <text:h text:style-name="P38" text:outline-level="2">
        <text:bookmark-start text:name="_Toc162530245"/>
        <text:span text:style-name="T36">Article 2 : Description du projet </text:span>
        <text:bookmark-end text:name="_Toc162530245"/>
        <text:span text:style-name="T36">du Bénéficiaire</text:span>
      </text:h>
      <text:h text:style-name="P72" text:outline-level="4"/>
      <text:p text:style-name="P137">Le Bénéficiaire s’est engagé à mettre en œuvre de sa propre initiative et sous sa responsabilité, sans que l’ANCT n’en tire de contrepartie directe, le projet suivant : </text:p>
      ${demandesDeSubvention
        .map(
          ({ nomAction, contexte, besoins, description, feuilleDeRoute }) =>
            `<text:list text:style-name="WWNum23">
              <text:list-item>
                <text:p text:style-name="P16">${nomAction}</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P16">${feuilleDeRoute.nom}. Cette action repose sur le(s) actions suivante(s) : ${besoins.map((besoin) => besoinSubventionLabel[besoin]).join(', ')}</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P16">${contexte}</text:p>
              </text:list-item>
              <text:list-item>
                <text:p text:style-name="P16">${description}</text:p>
              </text:list-item>
            </text:list>
            <text:p></text:p>`,
        )
        .join('')}
        ${
          beneficiaireFormation
            ? `
          <text:list xml:id="list143016755717454" text:continue-list="list1555771453" text:style-name="WWNum23">
            <text:list-item>
              <text:p text:style-name="P141">
                <text:bookmark-start text:name="_Toc162530248"/>
                Formation d’un minimum de 60 Aidants numériques / Aidants Connect
              </text:p>
            </text:list-item>
            <text:list-item>
              <text:p text:style-name="P141">
                <text:span>Description de l’action : permettre le financement d’au moins 60 formations Aidants numériques/Aidants Connect pour les professionnels du territoire n’étant ni conseillers numériques, ni salariés de structures adhérentes à l’OPCO Uniformation.</text:span>
              </text:p>
            </text:list-item>
          </text:list>
          `
            : ''
        }
      <text:p text:style-name="P61"/>
      <text:h text:style-name="P69" text:outline-level="2">Article 3 : Durée de la convention<text:bookmark-end text:name="_Toc162530248"/>
      </text:h>
      <text:p text:style-name="P128">La présente convention prend effet à la date de sa signature par les parties et s’étend jusqu’à la réalisation et la validation des livrables attendus pour l’évaluation de la dépense des fonds mentionnés à l’article 5.2 de la présente convention, soit au plus tard le 31 décembre 2025. </text:p>
      <text:p text:style-name="P128">Durant cette période, le bénéficiaire s’engage à notifier tout retard pris dans l’exécution, toute modification des conditions d’exécution, de ses statuts ou de ses coordonnées bancaires.</text:p>
      <text:p text:style-name="P23"/>
      <text:h text:style-name="P38" text:outline-level="2">
        <text:bookmark-start text:name="_Toc162530249"/>
        <text:span text:style-name="T58">Article 4 : Modalités du financement</text:span>
        <text:bookmark-end text:name="_Toc162530249"/>
        <text:span text:style-name="T58"></text:span>
      </text:h>
      <text:h text:style-name="P78" text:outline-level="4">
        <text:bookmark-start text:name="_Toc162530250"/>
        <text:bookmark text:name="_Toc127540536"/>
        <text:bookmark text:name="_Toc127540836"/>
        <text:bookmark text:name="_Toc127542394"/>
        <text:bookmark text:name="_Toc128578887"/>
        <text:bookmark text:name="_Toc128579648"/>
        <text:bookmark text:name="_Toc128579791"/>
        <text:bookmark text:name="_Toc128580781"/>
        <text:bookmark text:name="_Toc128580823"/>
        <text:bookmark text:name="_Toc128583431"/>
        <text:bookmark text:name="_Toc141446324"/>
        <text:bookmark text:name="_Toc144713425"/>
        <text:bookmark text:name="_Toc144736303"/>
        <text:bookmark text:name="_Toc144976515"/>
        <text:bookmark text:name="_Toc127540496"/>
        <text:bookmark text:name="_Toc127540537"/>
        <text:bookmark text:name="_Toc127540837"/>
        <text:bookmark text:name="_Toc127542395"/>
        <text:bookmark text:name="_Toc128578888"/>
        <text:bookmark text:name="_Toc128579649"/>
        <text:bookmark text:name="_Toc128579792"/>
        <text:bookmark text:name="_Toc128580782"/>
        <text:bookmark text:name="_Toc128580824"/>
        <text:bookmark text:name="_Toc128583432"/>
        <text:bookmark text:name="_Toc141446325"/>
        <text:bookmark text:name="_Toc144713426"/>
        <text:bookmark text:name="_Toc144736304"/>
        <text:bookmark text:name="_Toc144976516"/>
        <text:bookmark text:name="_Toc127540497"/>
        <text:bookmark text:name="_Toc127540538"/>
        <text:bookmark text:name="_Toc127540838"/>
        <text:bookmark text:name="_Toc127542396"/>
        <text:bookmark text:name="_Toc128578889"/>
        <text:bookmark text:name="_Toc128579650"/>
        <text:bookmark text:name="_Toc128579793"/>
        <text:bookmark text:name="_Toc128580783"/>
        <text:bookmark text:name="_Toc128580825"/>
        <text:bookmark text:name="_Toc128583433"/>
        <text:bookmark text:name="_Toc141446326"/>
        <text:bookmark text:name="_Toc144713427"/>
        <text:bookmark text:name="_Toc144736305"/>
        <text:bookmark text:name="_Toc144976517"/>
        <text:bookmark text:name="_Toc127540498"/>
        <text:bookmark text:name="_Toc127540539"/>
        <text:bookmark text:name="_Toc127540839"/>
        <text:bookmark text:name="_Toc127542397"/>
        <text:bookmark text:name="_Toc128578890"/>
        <text:bookmark text:name="_Toc128579651"/>
        <text:bookmark text:name="_Toc128579794"/>
        <text:bookmark text:name="_Toc128580784"/>
        <text:bookmark text:name="_Toc128580826"/>
        <text:bookmark text:name="_Toc128583434"/>
        <text:bookmark text:name="_Toc141446327"/>
        <text:bookmark text:name="_Toc144713428"/>
        <text:bookmark text:name="_Toc144736306"/>
        <text:bookmark text:name="_Toc144976518"/>
        <text:bookmark text:name="_Toc127540499"/>
        <text:bookmark text:name="_Toc127540540"/>
        <text:bookmark text:name="_Toc127540840"/>
        <text:bookmark text:name="_Toc127542398"/>
        <text:bookmark text:name="_Toc128578891"/>
        <text:bookmark text:name="_Toc128579652"/>
        <text:bookmark text:name="_Toc128579795"/>
        <text:bookmark text:name="_Toc128580785"/>
        <text:bookmark text:name="_Toc128580827"/>
        <text:bookmark text:name="_Toc128583435"/>
        <text:bookmark text:name="_Toc141446328"/>
        <text:bookmark text:name="_Toc144713429"/>
        <text:bookmark text:name="_Toc144736307"/>
        <text:bookmark text:name="_Toc144976519"/>
        <text:bookmark text:name="_Toc127540495"/>
4.1.<text:tab/>
Montant de la participation financière<text:bookmark-end text:name="_Toc162530250"/>
    </text:h>
    <text:h text:style-name="P76" text:outline-level="4">
      <text:span text:style-name="T60">Le montant </text:span>
      <text:span text:style-name="T37">total prévisionnel du projet du bénéficiaire s’élève à </text:span>
      <text:span text:style-name="T60">${budgetGlobal.add(subventionFormation ?? 0).toString()} euros ; la contribution totale de </text:span>
      <text:span text:style-name="T60">l’ANCT </text:span>
      <text:span text:style-name="T37">à ce projet s’élève à </text:span>
      <text:span text:style-name="T60">${subventionTotal.toString()} euros.</text:span>
      <text:span text:style-name="T38"></text:span>
      <text:span text:style-name="T60">Ce projet se compose </text:span>
      <text:span text:style-name="T37">de la ou </text:span>
      <text:span text:style-name="T60">des action</text:span>
      <text:span text:style-name="T37">(</text:span>
      <text:span text:style-name="T60">s</text:span>
      <text:span text:style-name="T37">)</text:span>
      <text:span text:style-name="T60"> suivante</text:span>
      <text:span text:style-name="T37">(</text:span>
      <text:span text:style-name="T60">s</text:span>
      <text:span text:style-name="T37">)</text:span>
      <text:span text:style-name="T60"> : </text:span>
    </text:h>
    ${
      dotationsIngenieries && dotationIngenierieGlobal
        ? `
      <text:h text:style-name="P79" text:outline-level="4">
        <text:bookmark-start text:name="_Toc162530251"/>
        <text:soft-page-break/>
  4. 1. 1. Ingénierie de projet<text:bookmark-end text:name="_Toc162530251"/>
      </text:h>
      <text:p text:style-name="P16">Au titre de l’exercice 2024, l’ANCT contribue financièrement à l’action :</text:p>

      ${dotationsIngenieries
        .map(
          ({ nomAction, montant, pourcentage }) =>
            `<text:list text:style-name="WWNum23">
              <text:list-item>
                <text:p text:style-name="P16">${nomAction} à hauteur de ${montant.toString()} euros ce qui représente ${pourcentage.toFixed(2, 0)} % du budget prévisionnel du projet dont le budget global s’élève à ${dotationIngenierieGlobalWords} (${dotationIngenierieGlobal.toString()}) euros TTC</text:p>
              </text:list-item>
            </text:list>`,
        )
        .join('')}

      <text:p text:style-name="P16"/>
      <text:p text:style-name="P48">
        <text:span text:style-name="T18">Au titre de l’exercice 2024 de l’ANCT, la contribution financière de l’ANCT en ingénierie de projet s’élève ainsi à ${dotationIngenierieGlobalWords} (${dotationIngenierieGlobal.toString()}) euros TTC.</text:span>
      </text:p>
      <text:p text:style-name="P16"/>
      <text:p text:style-name="P16">L’ANCT se réserve le droit de réévaluer ce montant par la voie d’un avenant, notamment si le bénéficiaire n’est pas en mesure de justifier de l’emploi de la subvention conformément à la présente convention.</text:p>
      `
        : ''
    }
    ${
      beneficiaireFormation
        ? `
        <text:p text:style-name="P16">
          <text:s/>
          <text:bookmark-start text:name="_Hlk127547269"/>
        </text:p>
        <text:h text:style-name="P79" text:outline-level="4">
          <text:bookmark-start text:name="_Toc162530252"/>
          <text:span>4. 1. 2.</text:span>
          <text:bookmark-end text:name="_Hlk127547269"/>
          <text:span>Formations aidants numériques / Aidants Connect</text:span>
          <text:bookmark-end text:name="_Toc162530252"/>
        </text:h>
        <text:p text:style-name="P16"/>
        <text:p text:style-name="P16">
          <text:span text:style-name="P16">Au titre de l’exercice 2024 de l’ANCT, l’ANCT contribue financièrement aux formations pour un montant de vingt mille euros (20 000 €).</text:span>
          <text:bookmark-start text:name="_Hlk169515441"/>
          <text:span text:style-name="T18"></text:span>
          <text:bookmark-end text:name="_Hlk169515441"/>
          <text:span text:style-name="P16">Ce financement doit permettre de financer </text:span>
          <text:span text:style-name="T18">a minima</text:span>
          <text:span text:style-name="P16"> 60 formations aidants numériques/ Aidants Connect.</text:span>
          <text:span text:style-name="T18"></text:span>
        </text:p>
        <text:p text:style-name="P16"/>
        <text:p text:style-name="P16">Une partie de l’enveloppe peut permettre le financement de frais de gestion.</text:p>
        <text:p text:style-name="P16"/>
        <text:p text:style-name="P16">
          <text:span text:style-name="P16">Dans le cas où un reliquat subsisterait après financement d’un minimum de 60 formations</text:span>
          <text:span text:style-name="T18"></text:span>
          <text:span text:style-name="P16">aidants numériques/ Aidants Connect, cette somme peut être utilisée par le bénéficiaire pour financer une des actions d’ingénierie de projet listée dans la présente convention.</text:span>
        </text:p>
        <text:p text:style-name="P16"/>
        <text:p text:style-name="P16">L’ANCT se réserve le droit de réévaluer ce montant par la voie d’un avenant, notamment si le bénéficiaire n’est pas en mesure de justifier de l’emploi de la subvention conformément à la présente convention avant la fin de l’année 2025.</text:p>
        `
        : ''
    }

    <text:p text:style-name="P16"/>
    <text:p text:style-name="P54"/>
    <text:p text:style-name="P24">4. 2. Versement et délai de paiement</text:p>
    <text:p text:style-name="P24"/>
    <text:p text:style-name="P17">Le versement s’effectuera à compter de la signature de la convention. </text:p>
    <text:p text:style-name="P90">
      <text:s/>
    </text:p>
    <text:p text:style-name="P17">L’ANCT se réserve le droit de réclamer la restitution de tout ou partie de l’aide versée si le bénéficiaire justifie d’une exécution partiellement conforme à la présente convention, notamment dans le cadre des justificatifs qui doivent être transmis (article 5.2 de la présente convention).</text:p>
    <text:p text:style-name="P17"/>
    <text:p text:style-name="P17">Le bénéficiaire des fonds s’engage à fournir, dès la signature de la convention, un avis SIRENE et un RIB en format PDF. </text:p>
    <text:p text:style-name="P17"/>
    <text:p text:style-name="P54">Le comptable assignataire est l’agent comptable de l’ANCT, nommé à cet effet par arrêté du Ministre de l’action et des comptes publics.</text:p>
    <text:p text:style-name="P54"/>
    <text:p text:style-name="P18">
      <text:soft-page-break/>
    </text:p>
    <text:p text:style-name="P11"/>
    <text:h text:style-name="P45" text:outline-level="2">
      <text:bookmark-start text:name="_Toc162530253"/>
      <text:span text:style-name="T36">Article 5 : Suivi de la réalisation du projet du bénéficiaire et son évaluation</text:span>
      <text:bookmark-end text:name="_Toc162530253"/>
      <text:span text:style-name="T36"></text:span>
    </text:h>
    <text:p text:style-name="P6"/>
    <text:h text:style-name="P75" text:outline-level="4">
      <text:bookmark-start text:name="_Toc162530254"/>
      <text:span text:style-name="T37">5.1. Suivi et animation collective</text:span>
      <text:bookmark-end text:name="_Toc162530254"/>
      <text:span text:style-name="T37"></text:span>
    </text:h>
    <text:p text:style-name="P55"/>
    ${
      subventionIngenierie.toNumber()
        ? `
      <text:h text:style-name="P78" text:outline-level="4">
        <text:bookmark-start text:name="_Toc162530255"/>
  5. 1. 1. Projets d’ingénierie<text:bookmark-end text:name="_Toc162530255"/>
      </text:h>
      <text:p text:style-name="P39">
        <text:span text:style-name="T18">Le bénéficiaire conduit le suivi et l’évaluation de son projet sur la base d’indicateurs quantitatifs et </text:span>
        <text:span text:style-name="T23">des retours qualitatifs sur les actions et initiatives de la gouvernance. </text:span>
      </text:p>
      <text:p text:style-name="P150">Le bénéficiaire s’engage à fournir tous les documents nécessaires aux évaluations des actions décrites à l’article 2 ainsi qu’au suivi technique et financier du projet. <text:s/>
      </text:p>
      <text:p text:style-name="P122">Le suivi et l’animation de ce dispositif impliquera les modalités de fonctionnement suivantes :<text:bookmark-start text:name="_Hlk149848689"/>
      </text:p>
      <text:list xml:id="list955164343" text:style-name="WWNum29">
        <text:list-item>
          <text:p text:style-name="P154">Communiquer à la première demande et dans les plus brefs délais de manière électronique, toute information ou document que l’ANCT pourrait solliciter dans le cadre du suivi budgétaire du projet et de l’appel à candidatures au global.</text:p>
        </text:list-item>
        <text:list-item>
          <text:p text:style-name="P154">Participer, autant que faire se peut, à toutes rencontres ou action d’animation, de formation et de suivi mises en place par l’ANCT ou toute personne ou organisme désignée par l’agence. </text:p>
        </text:list-item>
        <text:list-item>
          <text:p text:style-name="P154">Utiliser et alimenter en ressources, de manière mutualisée et ouverte (contribution à des communs), les outils collaboratifs comme Les Bases. </text:p>
        </text:list-item>
        <text:list-item>
          <text:p text:style-name="P153">
            <text:span text:style-name="T42">Informer l’ANCT dès qu’il en a connaissance de tout évènement pouvant affecter le bon déroulement de ses actions ou la bonne exécution de la convention. En cas de difficulté majeure à la mise en œuvre d’une action conventionnée, un plan d’actions pour y remédier doit être mis en place par le </text:span>
            <text:span text:style-name="T33">bénéficiaire</text:span>
            <text:span text:style-name="T42"> concerné et les changements stratégiques peuvent faire l’objet d’un avenant à la convention sur accord des deux Parties. </text:span>
          </text:p>
        </text:list-item>
        <text:list-item>
          <text:p text:style-name="P155">Autoriser pour l’ANCT ou toute autre personnes ou organisme désigné par elle, l’accès aux sites sur lesquels une action est réalisée, la consultation de tout document relatif aux actions, dans le respect de la confidentialité des informations transmises. <text:bookmark-end text:name="_Hlk149848689"/>
          </text:p>
        </text:list-item>
      </text:list>
      `
        : ''
    }
    ${
      beneficiaireFormation
        ? `
      <text:p text:style-name="P16"/>
      <text:h text:style-name="P79" text:outline-level="4">
        <text:bookmark-start text:name="_Toc162530256"/>
  5. 1. 2. Formations aidants numériques / Aidants connect<text:bookmark-end text:name="_Toc162530256"/>
      </text:h>
      <text:p text:style-name="P16">Le bénéficiaire devra informer sa préfecture de département et l’ANCT de la bonne mise en œuvre de sa stratégie de déploiement des formations.</text:p>
      <text:p text:style-name="P16">Il participera aux webinaires animés par l’ANCT pour les accompagner sur ce déploiement.</text:p>
      <text:p text:style-name="P16">Dans le cadre de la convention, le bénéficiaire est seul responsable de son exécution et de l’ensemble des opérations afférentes.</text:p>
      <text:p text:style-name="P16">L’ANCT ne pourra être tenue pour responsable de tout acte ou manquement contractuel commis à raison de la réalisation de la présente convention par le bénéficiaire. Le bénéficiaire garantit l’ANCT contre tout recours et conséquences pécuniaires dudit recours provenant d’un tiers, à raison de la réalisation de la présente convention.</text:p>
      `
        : ''
    }
    <text:p text:style-name="P58"/>
    <text:h text:style-name="P78" text:outline-level="4">
    <text:bookmark-start text:name="_Toc162530257"/>
    5.2. Évaluation de la dépense des fonds<text:bookmark-end text:name="_Toc162530257"/>
    </text:h>
    <text:p text:style-name="P49">
    <text:soft-page-break/>
    <text:span text:style-name="T10">A l’achèvement du projet, et au plus tard au 31 décembre 2025, sont établis par le </text:span>
    <text:span text:style-name="T15">bénéficiaire</text:span>
    <text:span text:style-name="T10"> et transmis à l’ANCT :</text:span>
    </text:p>
    <text:list xml:id="list2255637048" text:style-name="WWNum1">
      ${
        subventionIngenierie.toNumber()
          ? `
        <text:list-item>
          <text:p text:style-name="P92">Un état des dépenses réalisées, </text:p>
        </text:list-item>
        <text:list-item>
          <text:p text:style-name="P93">Un bilan du projet, </text:p>
        </text:list-item>
        <text:list-item>
          <text:p text:style-name="P92">Une évaluation des résultats du projet, </text:p>
        </text:list-item>
        `
          : ''
      }
      ${
        beneficiaireFormation
          ? `
        <text:list-item>
          <text:p text:style-name="P92">Pour chaque professionnel formé : </text:p>
          <text:list>
            <text:list-item>
              <text:p text:style-name="P92">Nom et prénom du professionnel, </text:p>
            </text:list-item>
            <text:list-item>
              <text:p text:style-name="P92">SIRET et nom de la structure employeuse du professionnel formé, </text:p>
            </text:list-item>
            <text:list-item>
              <text:p text:style-name="P92">Nom de l’organisme de formation ayant dispensé la formation et intitulé de la formation suivie, certification QUALIOPI de l’organisme de formation</text:p>
            </text:list-item>
            <text:list-item>
              <text:p text:style-name="P92">Nom du/des modules de formation suivis</text:p>
            </text:list-item>
          </text:list>
        </text:list-item>
        `
          : ''
      }
    </text:list>
    <text:p text:style-name="P10"/>
    <text:p text:style-name="P130">Ces documents devront attester de la conformité des dépenses effectuées à l’objet de la subvention. </text:p>
    <text:p text:style-name="P7"/>
    <text:p text:style-name="P46">
      <text:span text:style-name="T1">L’ANCT pourra </text:span>
      <text:span text:style-name="T18">réclamer la restitution de tout ou partie de l’aide versée si le bénéficiaire n’est pas en mesure de justifier d’une exécution conforme à la présente convention.</text:span>
    </text:p>
    <text:p text:style-name="P7"/>
    <text:p text:style-name="P10">Les pièces justificatives des dépenses et le bilan du projet, ainsi que toute correspondance relative à l’exécution de la convention, seront également transmis par le bénéficiaire à sa préfecture départementale de rattachement. </text:p>
    <text:p text:style-name="P10"/>
    <text:p text:style-name="P11"/>
    <text:h text:style-name="P68" text:outline-level="2">
      <text:bookmark-start text:name="_Toc162530258"/>
Article 6 : Communication et propriété intellectuelle<text:bookmark-end text:name="_Toc162530258"/>
    </text:h>
    <text:p text:style-name="P11">Les financements accordés doivent être portés obligatoirement à la connaissance des bénéficiaires et du grand public. </text:p>
    <text:p text:style-name="P11"/>
    <text:p text:style-name="P109">Tous les documents de promotion et de communication en lien avec les projets portés dans le cadre de cet appel à candidatures doivent porter les logotypes de l’ANCT et France Numérique Ensemble (affiches, flyers, programmes, site internet…) et la mention « avec le soutien de l’ANCT » pour les diverses publications, dossiers de presse, communiqués de presse, documents audiovisuels. </text:p>
    <text:p text:style-name="P11"/>
    <text:p text:style-name="P115">Aux seules fins d’exécution des obligations visées par la présente convention, l’ANCT autorise le Bénéficiaire :</text:p>
    <text:list xml:id="list4173781774" text:style-name="WWNum3">
      <text:list-item>
        <text:p text:style-name="P114">À utiliser son logo joint en annexe,</text:p>
      </text:list-item>
      <text:list-item>
        <text:p text:style-name="P114">À faire mention de la contribution de l’ANCT sous une forme qui aura reçu son accord préalable et écrit.</text:p>
      </text:list-item>
    </text:list>
    <text:p text:style-name="P26"/>
    <text:p text:style-name="P47">
      <text:span text:style-name="T18">De </text:span>
      <text:span text:style-name="T17">manière générale, chacune des parties à la présente convention s’engage dans l’ensemble de ses actions de communication, d’information et de promotion à ne pas porter atteinte à l’image ou à la renommée de son cocontractant.</text:span>
    </text:p>
    <text:p text:style-name="P11"/>
    <text:p text:style-name="P11">En outre, chacune des parties s’engage à informer son cocontractant de tout projet d’action promotionnelle.</text:p>
    <text:p text:style-name="P11"/>
    <text:p text:style-name="P47">
      <text:span text:style-name="T17">Toute utilisation, représentation ou reproduction des signes distinctifs de l’ANCT et du </text:span>
      <text:span text:style-name="T25">bénéficiaire</text:span>
      <text:span text:style-name="T17">, par l’une des Parties, non prévue par le présent article, est interdite.</text:span>
    </text:p>
    <text:p text:style-name="P11"/>
    <text:p text:style-name="P47">
      <text:span text:style-name="T17">A l’e</text:span>
      <text:span text:style-name="T18">xtinction des obligations visées par l’article 2 de la convention, le Bénéficiaire s’engage à cesser tout usage des signes distinctifs de l’ANCT sauf accord exprès écrit contraire.</text:span>
    </text:p>
    <text:p text:style-name="P27"/>
    <text:p text:style-name="P27">
      <text:soft-page-break/>
    </text:p>
    <text:p text:style-name="P47">
      <text:span text:style-name="T23">Étant donné le rôle de l’ANCT dans la mise en œuvre de la politique publique de l’inclusion numérique et de la feuille de route FNE, le Bénéficiaire l’autorise </text:span>
      <text:span text:style-name="T27">à utiliser, reproduire, représenter et diffuser les communications, documents et autres livrables que le bénéficiaire réalise dans le cadre de cette convention. </text:span>
    </text:p>
    <text:p text:style-name="P27"/>
    <text:h text:style-name="P68" text:outline-level="2">
      <text:bookmark-start text:name="_Hlk120095132"/>
      <text:bookmark-start text:name="_Toc162530259"/>
Article 7 : Respect du Contrat d’engagement républicain par les associations et les fondations<text:bookmark-end text:name="_Toc162530259"/>
    </text:h>
    <text:p text:style-name="P106">Si le Bénéficiaire de la subvention publique représente une association ou une fondation, il s’engage à respecter le contrat d’engagement républicain prévu à l’article 10-1 de la loi du 12 avril 2000 relative aux droits des citoyens dans leurs relations avec les administrations notamment : </text:p>
    <text:list xml:id="list4089512982" text:style-name="WWNum8">
      <text:list-item>
        <text:p text:style-name="P97">
          <text:span text:style-name="T18">À</text:span>
          <text:span text:style-name="T17"> respecter les principes de liberté’ d&apos;égalité, de fraternité et de dignité de la personne humaine, ainsi que les symboles de la République au sens de l&apos;article 2 de la Constitution ;</text:span>
        </text:p>
      </text:list-item>
      <text:list-item>
        <text:p text:style-name="P97">
          <text:span text:style-name="T18">À</text:span>
          <text:span text:style-name="T17"> ne pas remettre en cause le caractère laïque de la République ;</text:span>
        </text:p>
      </text:list-item>
      <text:list-item>
        <text:p text:style-name="P97">
          <text:span text:style-name="T18">À</text:span>
          <text:span text:style-name="T17"> s&apos;abstenir de toute action portant atteinte à l&apos;ordre public.</text:span>
        </text:p>
      </text:list-item>
    </text:list>
    <text:p text:style-name="P106">L’association ou la fondation informe ses membres par tout moyen (affichage dans ses locaux, mise en ligne sur son site internet, etc…) des engagements inscrits dans le contrat d’engagement républicain.  Elle veille à ce qu’ils soient respectés par ses dirigeants, ses salariés, ses membres et ses bénévoles. </text:p>
    <text:p text:style-name="P106">Tout constat d’un manquement commis par l’une ou l’autre de ces personnes conduira au reversement de la subvention au prorata de la période restant à courir.<text:bookmark-end text:name="_Hlk120095132"/>
    </text:p>
    <text:p text:style-name="P27"/>
    <text:h text:style-name="P68" text:outline-level="2">
      <text:bookmark-start text:name="_Toc162530260"/>
Article 8 : Résiliation<text:bookmark-end text:name="_Toc162530260"/>
    </text:h>
    <text:h text:style-name="P73" text:outline-level="4">
      <text:bookmark-start text:name="_Toc162530261"/>
      <text:span text:style-name="T37">8.1. <text:s/>
Résiliation pour faute</text:span>
      <text:bookmark-end text:name="_Toc162530261"/>
      <text:span text:style-name="T37">
        <text:s/>
      </text:span>
    </text:h>
    <text:p text:style-name="P20">La convention sera résiliée de plein droit en cas de manquement, de mauvaise exécution ou d’inexécution, par l’une ou l’autre des parties, de ses obligations contractuelles, et notamment dans l’hypothèse où les sommes versées par l’ANCT au titre de la convention étaient utilisées à des fins non conformes aux objectifs définis par les présentes.</text:p>
    <text:p text:style-name="P20">La Partie plaignante devra préalablement envoyer à l’autre Partie une mise en demeure par lettre recommandée avec accusé de réception. Si à l’issue d’un délai de trente (30) jours calendaires à compter de son envoi, la mise en demeure est restée infructueuse ou que la Partie n’a pas pu remédier au manquement pendant ce même délai, la convention est résiliée par lettre recommandée avec accusé de réception. </text:p>
    <text:h text:style-name="P80" text:outline-level="4">
      <text:bookmark-start text:name="_Toc162530262"/>
8.2. <text:s/>
Effets de la résiliation<text:bookmark-end text:name="_Toc162530262"/>
  </text:h>
  <text:p text:style-name="P63">
    <text:bookmark-start text:name="_Hlk127440961"/>
    <text:bookmark-start text:name="_Hlk127441007"/>
En cas de résiliation anticipée de la convention, dans les cas prévus ci-dessus, la participation financière de l’ANCT est liquidée en fonction des dépenses effectivement réalisés et justifiées par le Bénéficiaire à la date d’effet de la résiliation.</text:p>
  <text:p text:style-name="P63"/>
  <text:p text:style-name="P44">
    <text:span text:style-name="T55">Le cas échéant, le </text:span>
    <text:span text:style-name="T56">bénéficiaire </text:span>
    <text:span text:style-name="T55">sera tenu au reversement des sommes indûment perçues.</text:span>
  </text:p>
  <text:p text:style-name="P63"/>
  <text:p text:style-name="P64">Aucune indemnité ne pourra être demandée du fait de cette résiliation. </text:p>
  <text:p text:style-name="P64"/>
  <text:p text:style-name="P64"/>
  <text:h text:style-name="P70" text:outline-level="2">
    <text:bookmark-start text:name="_Toc162530263"/>
    <text:soft-page-break/>
Article 9 : Force majeure<text:bookmark-end text:name="_Toc162530263"/>
  <text:bookmark-end text:name="_Hlk127440961"/>
  <text:bookmark-end text:name="_Hlk127441007"/>
</text:h>
<text:p text:style-name="P122">Les Parties conviennent qu’en cas de force majeure tel que défini par l’article 1218 du Code civil, les obligations contractuelles seront suspendues à compter de la notification et de la preuve du cas de force majeure par la Partie qui le subit.</text:p>
<text:p text:style-name="P122">Les obligations suspendues seront exécutées à nouveau dès que les effets de l’événement de force majeure auront cessé. </text:p>
<text:p text:style-name="P122">Si la situation de force majeure se poursuit au-delà d’un délai d’un 1 mois, l’autre Partie pourra résilier de plein droit tout ou partie de la convention par lettre recommandée avec accusé de réception.</text:p>
<text:p text:style-name="P63"/>
<text:h text:style-name="P68" text:outline-level="2">
  <text:bookmark-start text:name="_Toc162530264"/>
Article 10 : Dispositions générales<text:bookmark-end text:name="_Toc162530264"/>
</text:h>
<text:h text:style-name="P81" text:outline-level="4">
  <text:bookmark-start text:name="_Toc162530265"/>
10.1. Modification de la convention<text:bookmark-end text:name="_Toc162530265"/>
</text:h>
<text:p text:style-name="P20">Aucun document postérieur, ni aucune modification de la convention, quelle qu’en soit la forme, ne produiront d’effet entre les parties sans prendre la forme d’un avenant dûment daté et signé entre elles.</text:p>
<text:h text:style-name="P81" text:outline-level="4">
  <text:bookmark-start text:name="_Toc162530266"/>
10.2. Nullité<text:bookmark-end text:name="_Toc162530266"/>
</text:h>
<text:p text:style-name="P20">Si l’une quelconque des stipulations de la présente convention s’avérait nulle au regard d’une règle de droit en vigueur ou d’une décision administrative ou judiciaire devenue définitive, elle serait alors réputée non écrite, sans pour autant entraîner la nullité de la convention, ni altérer la validité des autres stipulations.</text:p>
<text:h text:style-name="P81" text:outline-level="4">
  <text:bookmark-start text:name="_Toc162530267"/>
10.3. <text:s/>
Renonciation<text:bookmark-end text:name="_Toc162530267"/>
</text:h>
<text:p text:style-name="P20">Le fait que l’une ou l’autre des parties ne revendique pas l’application d’une clause quelconque de la convention ou acquiesce à son inexécution, que ce soit de manière temporaire ou définitive, ne pourra être interprété comme une renonciation par cette partie aux droits qui découlent pour elle de ladite clause.</text:p>
<text:h text:style-name="P74" text:outline-level="4">
<text:bookmark-start text:name="_Toc162530268"/>
<text:span text:style-name="T37">10.4. Cession et transmission de la convention</text:span>
<text:bookmark-end text:name="_Toc162530268"/>
<text:span text:style-name="T37"></text:span>
</text:h>
<text:p text:style-name="P44">
<text:span text:style-name="T55">La présente convention étant conclu </text:span>
<text:span text:style-name="T57">intuitu personæ</text:span>
<text:span text:style-name="T55">, le </text:span>
<text:bookmark-start text:name="_Hlk161321318"/>
<text:span text:style-name="T56">bénéficiaire</text:span>
<text:bookmark-end text:name="_Hlk161321318"/>
<text:span text:style-name="T55"> ne pourra transférer ou céder, de quelque manière que ce soit les droits et obligations en résultant, sans l’accord exprès, préalable et écrit respectif de l’ANCT.</text:span>
</text:p>
<text:p text:style-name="P63"/>
<text:h text:style-name="P74" text:outline-level="4">
<text:bookmark-start text:name="_Toc162530269"/>
<text:span text:style-name="T37">10.5. Publication des données</text:span>
<text:bookmark-end text:name="_Toc162530269"/>
<text:span text:style-name="T37"></text:span>
</text:h>
<text:p text:style-name="P14">Les données essentielles relatives aux conditions de la subvention de la présente convention seront publiées par l’ANCT sur le site Internet data.gouv.fr.</text:p>
<text:h text:style-name="P74" text:outline-level="4">
<text:bookmark-start text:name="_Toc162530270"/>
<text:span text:style-name="T37">10.6. Données personnelles</text:span>
<text:bookmark-end text:name="_Toc162530270"/>
<text:span text:style-name="T37"></text:span>
</text:h>
<text:p text:style-name="P138">Dans le cadre de la présente convention, les parties s’engagent à respecter la réglementation en vigueur applicable au traitement de données à caractère personnel et en particulier, le règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 entré en vigueur le 25 mai 2018.</text:p>
<text:p text:style-name="P39">
<text:span text:style-name="T19">Les Parties s’engagent à utiliser les données recueillies pour les seuls besoins de l’exécution de la convention ainsi qu’à respecter et à faire respecter par les personnes auxquelles seront </text:span>
<text:soft-page-break/>
<text:span text:style-name="T19">confiés le traitement d’informations à caractère personnel des participants, les dispositions législatives et réglementaires relatives à l’informatique, aux fichiers et aux libertés. </text:span>
</text:p>
<text:p text:style-name="P19"/>
<text:h text:style-name="Heading_20_2" text:outline-level="2">
<text:bookmark-start text:name="_Toc162530271"/>
<text:span text:style-name="T36">Article 11 : Conflits d&apos;intérêts</text:span>
<text:bookmark-end text:name="_Toc162530271"/>
<text:span text:style-name="T36"></text:span>
</text:h>
<text:p text:style-name="P117">Le bénéficiaire doit mettre en œuvre toutes les mesures nécessaires pour éviter une situation de conflit d’intérêts o’ l&apos;exécution impartiale et objective de la présente convention est ou parait compromise pour des raisons mettant en je’ l&apos;intérêt économique’ l&apos;affinité politique ou nationale, les liens familiaux ou affectifs ou tout autre intérêt partagé avec une autre personne.</text:p>
<text:p text:style-name="P117">Si un conflit d&apos;intérêts survient pendant l&apos;exécution de la présente convention, le bénéficiaire doit immédiatement prendre toutes les mesures nécessaires pour le résoudre et prévenir l’ANCT. </text:p>
<text:p text:style-name="P117">L’ANCT se réserve le droit de vérifier que les mesures prises sont appropriées et peut exiger que des mesures supplémentaires soient prises si nécessaire.</text:p>
<text:p text:style-name="P20"/>
<text:h text:style-name="P68" text:outline-level="2">
<text:bookmark-start text:name="_Toc162530272"/>
Article 12 : Litiges<text:bookmark-end text:name="_Toc162530272"/>
</text:h>
<text:p text:style-name="P118">La présente convention est régie par le droit français.</text:p>
<text:p text:style-name="P118">En cas de contestation, litiges ou autres différends éventuels sur l’interprétation ou l’exécution de la présente convention, les parties s’efforceront de parvenir à un règlement à l’amiable entre elles. </text:p>
<text:p text:style-name="P118">A défaut, et préalablement à l’engagement de toute action contentieuse et sous réserves des dispositions prises au titre des articles précédents, les parties s’engagent à recourir à la médiation en application des articles L 213-1 du Code de la justice administrative du différend qui les oppose et de saisir le président du Tribunal administratif de Paris à l’effet d’organiser la mission de médiation et de désigner la ou les personnes qui en seront chargées.</text:p>
<text:p text:style-name="P118">En cas d’échec d’une solution amiable, tout litige ou contestation auxquels la présente convention pourrait donner lieu tant sur sa validité que sur son interprétation, son exécution ou sa réalisation, sera soumis aux tribunaux compétents.</text:p>
<text:p text:style-name="P6"/>
<text:p text:style-name="P14"/>
<text:p text:style-name="P12"/>
<text:p text:style-name="P12">Fait en deux exemplaires originaux,</text:p>
<text:p text:style-name="P12"/>
<text:p text:style-name="P50">
<text:span text:style-name="T17">Le </text:span>
<text:span text:style-name="T6">____________XX /XX/XXXX________</text:span>
</text:p>
<text:p text:style-name="P12"/>
<text:p text:style-name="P12"/>
<table:table table:name="Table1" table:style-name="Table1">
<table:table-column table:style-name="Table1.A"/>
<table:table-column table:style-name="Table1.B"/>
<table:table-row table:style-name="Table1.1">
  <table:table-cell table:style-name="Table1.A1" office:value-type="string">
    <text:p text:style-name="P51">
      <text:bookmark-start text:name="_Hlk149643635"/>
      <text:span text:style-name="T17">Pour ${nom},</text:span>
    </text:p>
    <text:p text:style-name="P121">Le/La FONCTON</text:p>
    <text:p text:style-name="P121">Monsieur/Madame NOM<text:bookmark text:name="_GoBack"/>
    </text:p>
  </table:table-cell>
  <table:table-cell table:style-name="Table1.A1" office:value-type="string">
    <text:p text:style-name="P13">Pour l’ANCT,</text:p>
    <text:p text:style-name="P13">Stanislas BOURRON, </text:p>
    <text:p text:style-name="P13">Directeur Général</text:p>
    <text:p text:style-name="P13"/>
    <text:p text:style-name="P13"/>
  </table:table-cell>
</table:table-row>
<text:soft-page-break/>
<table:table-row table:style-name="Table1.2">
  <table:table-cell table:style-name="Table1.A1" office:value-type="string">
    <text:p text:style-name="P13">
      <text:bookmark-end text:name="_Hlk149643635"/>
    </text:p>
  </table:table-cell>
  <table:table-cell table:style-name="Table1.A1" office:value-type="string">
    <text:p text:style-name="P13"/>
  </table:table-cell>
</table:table-row>
</table:table>
<text:p text:style-name="P15"/>
<text:h text:style-name="P71" text:outline-level="2">
<text:bookmark-start text:name="_Toc162530273"/>
Annexes<text:bookmark-end text:name="_Toc162530273"/>
</text:h>
<text:p text:style-name="P25"/>
<text:p text:style-name="P131">Liste des annexes : </text:p>
<text:list xml:id="list4063803208" text:style-name="WWNum4">
${
  subventionIngenierie.toNumber()
    ? `
  <text:list-item>
    <text:p text:style-name="P91">Cadrage du financement des projets d’ingénierie</text:p>
  </text:list-item>
  `
    : ''
}
${
  beneficiaireFormation
    ? `
  <text:list-item>
    <text:p text:style-name="P91">Cadrage du financement des formations aidants numériques / Aidants Connect</text:p>
  </text:list-item>
  `
    : ''
}
<text:list-item>
  <text:p text:style-name="P91">Logo de l’ANCT</text:p>
</text:list-item>
<text:list-item>
  <text:p text:style-name="P94">Logo de FNE</text:p>
</text:list-item>
</text:list>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30"/>
${
  subventionIngenierie.toNumber()
    ? `
  <text:p text:style-name="P30">Annexe 1</text:p>
  <text:p text:style-name="P33">Cadrage du financement des projets d’ingénierie</text:p>
  <text:p text:style-name="P31"/>
  <text:p text:style-name="P56">Article 1 : Type de dépenses éligibles et transfert des fonds</text:p>
  <text:p text:style-name="P122">La subvention reçue par le bénéficiaire doit être fléchée sur un ou plusieurs projet(s) de territoires qui s’inscrivent dans le cadre suivant :</text:p>
  <text:p text:style-name="P39">
  <draw:frame draw:style-name="fr1" draw:name="Image 5" text:anchor-type="as-char" svg:width="18.302cm" svg:height="5.817cm" draw:z-index="3">
    <draw:image xlink:href="Pictures/100000000000044A0000015D79251F1FA5C2ABC4.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad" draw:mime-type="image/png"/>
  </draw:frame>
  </text:p>
  <text:p text:style-name="P122">La subvention reçue par le bénéficiaire ne peut en aucun cas être transférée à un autre organisme hormis dans le cadre de prestation de service avec devis associé. </text:p>
  <text:p text:style-name="P122">Dans le cadre où plusieurs membres de la gouvernance sont destinataires des fonds d’ingénierie, une convention par organisme bénéficiaire doit être établie avec l’ANCT. </text:p>`
    : ''
}
${
  beneficiaireFormation
    ? `
  <text:p text:style-name="P30"/>
  <text:p text:style-name="P30">Annexe 2</text:p>
  <text:p text:style-name="P33">Cadrage du financement des formations aidants numériques/Aidants Connect</text:p>
  <text:p text:style-name="P32"/>
  <text:p text:style-name="P56">Article 1 : Le dispositif Aidants Connect</text:p>
  <text:p text:style-name="Standard">
  <text:a xlink:type="simple" xlink:href="https://aidantsconnect.beta.gouv.fr/" text:style-name="Internet_20_link" text:visited-style-name="Visited_20_Internet_20_Link">
    <text:span text:style-name="Internet_20_link">
      <text:span>Aidants Connect</text:span>
    </text:span>
  </text:a>
  <text:span text:style-name="P122"> est un service public numérique qui permet de sécuriser l’accompagnement des usagers dans leurs démarches administratives en ligne. Pour être habilité à Aidants Connect, un professionnel doit suivre une formation lui permettant d’acquérir les bases de connaissance nécessaires à l’utilisation de ce service. </text:span>
  </text:p>
  <text:p text:style-name="Standard">
  <text:span text:style-name="P122">Pour plus d’information sur le dispositif, vous pouvez consulter </text:span>
  <text:a xlink:type="simple" xlink:href="https://aidantsconnect.beta.gouv.fr/static/guides_aidants_connect/AC_Depliant4P_2024.pdf" text:style-name="Internet_20_link" text:visited-style-name="Visited_20_Internet_20_Link">
    <text:span text:style-name="Internet_20_link">
      <text:span>ce document de présentation</text:span>
    </text:span>
  </text:a>
  <text:span>.</text:span>
  </text:p>
  <text:p text:style-name="P56">Article 2 : La formation aidants numériques/Aidants Connect</text:p>
  <text:p text:style-name="P122">Des modalités de financement des formations aidants numériques / Aidants Connect existent déjà dans les cas de figure suivants :</text:p>
  <text:list xml:id="list3368466423" text:style-name="WWNum26">
  <text:list-item>
    <text:p text:style-name="P91">Pour les conseillers numériques</text:p>
  </text:list-item>
  </text:list>
  <text:p text:style-name="P122">La formation est financée dans le cadre de la formation continue des conseillers numériques* et opérée par la Mednum.</text:p>
  <text:p text:style-name="P122">*Dans le cadre de la formation initiale, le dispositif inclut deux modules thématiques choisis par le conseiller numérique. Tous les conseillers numériques ayant suivi un parcours de formation initiale peuvent également suivre un module par an, financé par l’état.</text:p>
  <text:list xml:id="list143016731996172" text:continue-numbering="true" text:style-name="WWNum26">
  <text:list-item>
    <text:p text:style-name="P91">
      <text:s/>
  La structure demandeuse est adhérente à l’OPCO Uniformation</text:p>
  </text:list-item>
  </text:list>
  <text:p text:style-name="Standard">
  <text:span text:style-name="P122">La formation est financée dans le cadre d’un </text:span>
  <text:a xlink:type="simple" xlink:href="https://www.uniformation.fr/entreprise/actualites/comment-favoriser-la-formation-des-aidants-et-des-mediateurs-numeriques" text:style-name="Internet_20_link" text:visited-style-name="Visited_20_Internet_20_Link">
    <text:span text:style-name="Internet_20_link">
      <text:span text:style-name="P122">partenariat entre l’ANCT et Uniformation</text:span>
    </text:span>
  </text:a>
  <text:span text:style-name="P122">, et la formation peut être suivie auprès de l’organisme du choix de la structure.</text:span>
  </text:p>
  <text:list xml:id="list143017437969517" text:continue-numbering="true" text:style-name="WWNum26">
  <text:list-item>
    <text:p text:style-name="P91">La structure est déjà habilitée Aidants Connect</text:p>
  </text:list-item>
  </text:list>
  <text:p text:style-name="P122">En plus des 2 options ci-dessus, un employé habilité et utilisateur d’Aidants Connect d’une structure peut former son collègue si celui-ci a réalisé plus de 5 mandats (se rapprocher du référent Aidants Connect de votre structure pour bénéficier d’une formation entre pairs).</text:p>
  <text:p text:style-name="Standard">
  <text:span text:style-name="P131">La présente subvention à vocation à financer les départs en formations des professionnels du territoire du Bénéficiaire qui ne sont pas concernés par les 3 options ci-dessus.</text:span>
  </text:p>`
    : ''
}
<text:p text:style-name="P31"/>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30">
<text:soft-page-break/>
</text:p>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30"/>
<text:p text:style-name="P30">Annexe 3</text:p>
<text:p text:style-name="P33">Logo ANCT</text:p>
<text:p text:style-name="P28"/>
<text:p text:style-name="P29"/>
<text:p text:style-name="P3">
<draw:frame draw:style-name="fr1" draw:name="Image 7" text:anchor-type="as-char" svg:width="16.002cm" svg:height="6.04cm" draw:z-index="4">
  <draw:image xlink:href="Pictures/10000000000003200000012EC614AD7C4E7E902B.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad" draw:mime-type="image/png"/>
</draw:frame>
</text:p>
<text:p text:style-name="P119">
<text:tab/>
</text:p>
<text:p text:style-name="P30">Annexe 4</text:p>
<text:p text:style-name="P33">Logo France Numérique Ensemble</text:p>
<text:p text:style-name="P33"/>
<text:p text:style-name="P3">
<draw:frame draw:style-name="fr1" draw:name="Image 6" text:anchor-type="as-char" svg:width="13.294cm" svg:height="4.419cm" draw:z-index="5">
  <draw:image xlink:href="Pictures/100000000000043800000167EB22AE4E5A3C39E2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad" draw:mime-type="image/png"/>
</draw:frame>
</text:p>
<text:p text:style-name="Standard"/>
</office:text>
</office:body>
</office:document-content>
`
