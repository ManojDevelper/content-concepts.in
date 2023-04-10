import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Layout, Button } from "antd"
import ConnectPreviewSection from "../ConnectTeams";
import EditingLabel from './editingLabel';
import MenuContent from './content';
import GoogleReviews from "../GoogleReviews/index";
import ServiceCardSec from "./serviceCard";
import EditingLinks from "./editingLinks";
import NativeEditorsSec from "./nativeEditors";
import EditingLevels from './levels';
import EditingSamples from './samples';
import Highlights from './highlights';
import { ProcessPreviewSection } from "../Process"
import {
  MenuContainer,
  ServiceCard,
  PriceSection,
  TagContent,
  DescSection,
  ButtonSection
} from './styles';

const { Content, Sider } = Layout;

const MenuSection = props => {

  const data = props.content;

  const getCountry = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <Fragment>
      <MenuContainer>
        <Layout>
          <Content>
            <MenuContent content={data} description={props.description} preview={props.preview} />
          </Content>
          <Sider>
            {
              data.priceCard &&
              <ServiceCard>
                <h3>{data.title}</h3>
                <PriceSection>
                  <span className="startingText">{data.priceCard.pricing.title}</span>
                  {
                    data.priceCard.pricing.price &&
                    <div className="priceSec">
                      {getCountry === "Asia/Calcutta" ?
                        data.priceCard.pricing.price.inr && <span className="priceValue" dangerouslySetInnerHTML={{ __html: data.priceCard.pricing.price.inr }} />
                        :
                        data.priceCard.pricing.price.usd && <span className="priceValue" dangerouslySetInnerHTML={{ __html: data.priceCard.pricing.price.usd }} />
                      }
                    </div>
                  }
                </PriceSection>
                {
                  data.priceCard.tagContent &&
                  <TagContent>
                    <p>
                      {data.priceCard.tagContent}
                    </p>
                  </TagContent>
                }
                <DescSection>
                  <p>{data.priceCard.content}</p>
                </DescSection>
                <ButtonSection>
                  <Button type="primary">
                    <Link to="/pricing/">Get Started</Link>
                  </Button>
                </ButtonSection>
              </ServiceCard>
            }
          </Sider>
        </Layout>
      </MenuContainer>
      <ConnectPreviewSection />
      {data?.quoteTitle && <EditingLabel content={data.quoteTitle} />}
      {/* <GoogleReviews /> */}
      {data?.editingCard && data?.editingCard?.map((item) => {
        return (
          <div key={item?.title}>
            <ServiceCardSec content={item} />
            <EditingLinks content={item?.editingCardLinks} />
          </div>
        )
      })}
      {
        data.serviceProcess && <ProcessPreviewSection title={data.serviceProcess.title} process={data.serviceProcess.steps} />
      }
      {data?.quoteTitle && <EditingLabel content={data.quoteTitle} />}
      <Highlights content={data.editingHighlights} />
      {data?.editorSecTitle && data.editorSecCards && <NativeEditorsSec content={data.editorSecCards} title={data?.editorSecTitle} />}
      {data?.quoteTitle && <EditingLabel content={data.quoteTitle} />}
      <EditingSamples content={data.editingSample} />
      <EditingLevels content={data.editingLevels} />
    </Fragment>
  )
}

export default MenuSection
